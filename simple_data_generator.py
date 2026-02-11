#!/usr/bin/env python3
"""
Simple Test Data Generator for Rapid Sort
Creates 10 users and basic products
"""

import requests
import json
import random
import time
from datetime import datetime

# API Configuration
BASE_URL = "http://localhost:5000/api"
HEADERS = {"Content-Type": "application/json"}

def log(message):
    """Log messages with timestamp"""
    print(f"[{datetime.now().strftime('%H:%M:%S')}] {message}")

def make_request(method, endpoint, data=None, token=None):
    """Make HTTP request"""
    url = f"{BASE_URL}{endpoint}"
    headers = HEADERS.copy()
    
    if token:
        headers["Authorization"] = f"Bearer {token}"
        
    try:
        if method.upper() == "POST":
            response = requests.post(url, headers=headers, json=data)
        elif method.upper() == "GET":
            response = requests.get(url, headers=headers)
        return response
    except Exception as e:
        log(f"Request error: {e}")
        return None

def create_users():
    """Create 10 test users"""
    users_data = [
        {"firstName": "Admin", "lastName": "User", "email": "admin@rapidsort.com", "role": "admin", "department": "management"},
        {"firstName": "John", "lastName": "Manager", "email": "john.manager@rapidsort.com", "role": "manager", "department": "inventory"},
        {"firstName": "Sarah", "lastName": "Sales", "email": "sarah.sales@rapidsort.com", "role": "manager", "department": "sales"},
        {"firstName": "Mike", "lastName": "Stock", "email": "mike.stock@rapidsort.com", "role": "employee", "department": "inventory"},
        {"firstName": "Lisa", "lastName": "Warehouse", "email": "lisa.warehouse@rapidsort.com", "role": "employee", "department": "warehouse"},
        {"firstName": "David", "lastName": "Purchase", "email": "david.purchase@rapidsort.com", "role": "employee", "department": "purchasing"},
        {"firstName": "Emma", "lastName": "Logistics", "email": "emma.logistics@rapidsort.com", "role": "manager", "department": "warehouse"},
        {"firstName": "Tom", "lastName": "Sales", "email": "tom.sales@rapidsort.com", "role": "employee", "department": "sales"},
        {"firstName": "Anna", "lastName": "Inventory", "email": "anna.inventory@rapidsort.com", "role": "employee", "department": "inventory"},
        {"firstName": "Robert", "lastName": "Buyer", "email": "robert.buyer@rapidsort.com", "role": "manager", "department": "purchasing"}
    ]
    
    created_users = []
    tokens = {}
    
    log("Creating 10 test users...")
    
    for user_template in users_data:
        user_data = {
            **user_template,
            "password": "password123",
            "phone": f"+1-555-{random.randint(1000, 9999)}"
        }
        
        response = make_request("POST", "/auth/register", user_data)
        
        if response and response.status_code == 201:
            result = response.json()
            created_users.append(result["data"]["user"])
            tokens[result["data"]["user"]["email"]] = result["data"]["token"]
            log(f"✅ Created: {user_data['email']} ({user_data['role']})")
        else:
            error_msg = response.json().get("message", "Unknown error") if response else "No response"
            log(f"❌ Failed: {user_data['email']} - {error_msg}")
    
    return created_users, tokens

def create_products(tokens):
    """Create sample products using different user tokens"""
    products_data = [
        {"name": "Wireless Headphones", "price": 99.99, "quantity": 50},
        {"name": "Smartphone Case", "price": 19.99, "quantity": 200},
        {"name": "Laptop Stand", "price": 49.99, "quantity": 30},
        {"name": "USB-C Cable", "price": 12.99, "quantity": 100},
        {"name": "Cotton T-Shirt", "price": 24.99, "quantity": 150},
        {"name": "Running Shoes", "price": 89.99, "quantity": 75},
        {"name": "Coffee Maker", "price": 129.99, "quantity": 25},
        {"name": "Desk Lamp", "price": 39.99, "quantity": 40},
        {"name": "Notebook Set", "price": 15.99, "quantity": 80},
        {"name": "Water Bottle", "price": 22.99, "quantity": 120}
    ]
    
    log("Creating sample products...")
    
    token_list = list(tokens.values())
    created_products = []
    
    for i, product_template in enumerate(products_data):
        # Use different user tokens to create products
        token = token_list[i % len(token_list)]
        
        product_data = {
            **product_template,
            "description": f"High-quality {product_template['name'].lower()} for everyday use",
            "sku": f"SKU-{random.randint(10000, 99999)}",
            "minStockLevel": 10,
            "maxStockLevel": 500,
            "status": "active"
        }
        
        response = make_request("POST", "/products", product_data, token)
        
        if response and response.status_code == 201:
            result = response.json()
            created_products.append(result["data"])
            log(f"✅ Created product: {product_data['name']}")
        else:
            if response:
                try:
                    error_msg = response.json().get("message", f"HTTP {response.status_code}")
                    log(f"❌ Failed to create product {product_data['name']}: {error_msg}")
                except:
                    log(f"❌ Failed to create product {product_data['name']}: HTTP {response.status_code}")
            else:
                log(f"❌ Failed to create product {product_data['name']}: No response")
        
        time.sleep(0.3)  # Small delay between requests
    
    return created_products

def main():
    """Main function"""
    log("🚀 Starting Simple Test Data Generation")
    log("=" * 50)
    
    # Check backend
    response = make_request("GET", "/health")
    if not response or response.status_code != 200:
        log("❌ Backend server not running on http://localhost:5000")
        log("Please start: npm run start:backend")
        return
    
    log("✅ Backend server is running")
    
    # Create users
    users, tokens = create_users()
    
    if not users:
        log("❌ No users created, stopping...")
        return
    
    # Create products
    products = create_products(tokens)
    
    # Summary
    log("=" * 50)
    log("📊 Generation Summary:")
    log(f"   👥 Users created: {len(users)}")
    log(f"   📦 Products created: {len(products)}")
    log("=" * 50)
    log("✅ Simple data generation completed!")
    log("🌐 Login credentials (all use password: password123):")
    
    for user in users:
        log(f"   📧 {user['email']} - {user['role']} ({user['department']})")

if __name__ == "__main__":
    main()