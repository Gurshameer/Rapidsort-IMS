#!/usr/bin/env python3
"""
Working Test Data Generator for Rapid Sort Inventory Management System
Focuses on successfully creating users and products (orders have backend issues)
"""

import requests
import json
import time
import random
from datetime import datetime

class WorkingDataGenerator:
    def __init__(self):
        self.base_url = "http://localhost:5000/api"
        self.users = []
        self.tokens = {}
        self.products = []
        
    def log(self, message):
        """Log message with timestamp"""
        timestamp = datetime.now().strftime("%H:%M:%S")
        print(f"[{timestamp}] {message}")
    
    def make_request(self, method, endpoint, data=None, token=None):
        """Make HTTP request with proper headers"""
        url = f"{self.base_url}{endpoint}"
        headers = {"Content-Type": "application/json"}
        
        if token:
            headers["Authorization"] = f"Bearer {token}"
        
        try:
            if method == "GET":
                response = requests.get(url, headers=headers, timeout=10)
            elif method == "POST":
                response = requests.post(url, json=data, headers=headers, timeout=10)
            
            return response
        except requests.exceptions.RequestException as e:
            self.log(f"Request failed: {e}")
            return None
    
    def create_users(self):
        """Create essential users with rate limit handling"""
        user_templates = [
            {"role": "admin", "department": "management", "firstName": "Admin", "lastName": "User"},
            {"role": "manager", "department": "inventory", "firstName": "John", "lastName": "Manager"},
            {"role": "manager", "department": "sales", "firstName": "Sarah", "lastName": "Sales"},
            {"role": "employee", "department": "inventory", "firstName": "Mike", "lastName": "Stock"},
            {"role": "employee", "department": "warehouse", "firstName": "Lisa", "lastName": "Warehouse"}
        ]
        
        self.log("Creating/authenticating users...")
        
        for template in user_templates:
            email = f"{template['firstName'].lower()}.{template['lastName'].lower()}@rapidsort.com"
            password = "password123"
            
            # Try to login first
            login_data = {"email": email, "password": password}
            response = self.make_request("POST", "/auth/login", login_data)
            
            if response and response.status_code == 200:
                result = response.json()
                self.users.append(result["data"]["user"])
                self.tokens[result["data"]["user"]["email"]] = result["data"]["token"]
                self.log(f"✅ Logged in: {email} ({template['role']})")
            elif response and response.status_code == 429:
                self.log(f"⏸️ Rate limited, waiting 30 seconds...")
                time.sleep(30)
                continue
            else:
                # Create new user
                user_data = {
                    "firstName": template["firstName"],
                    "lastName": template["lastName"],
                    "email": email,
                    "password": password,
                    "role": template["role"],
                    "department": template["department"],
                    "phone": f"+1{random.randint(1000000000, 9999999999)}"
                }
                
                response = self.make_request("POST", "/auth/register", user_data)
                
                if response and response.status_code == 201:
                    result = response.json()
                    self.users.append(result["data"]["user"])
                    self.tokens[result["data"]["user"]["email"]] = result["data"]["token"]
                    self.log(f"✅ Created: {email} ({template['role']})")
                elif response and response.status_code == 429:
                    self.log(f"⏸️ Rate limited, waiting 30 seconds...")
                    time.sleep(30)
                    continue
                else:
                    error_msg = response.json().get("message", "Unknown error") if response else "No response"
                    self.log(f"❌ Failed: {email} - {error_msg}")
            
            time.sleep(3)  # Delay to avoid rate limiting
        
        self.log(f"✅ Authenticated {len(self.users)} users successfully")
    
    def create_products(self):
        """Create diverse product catalog"""
        self.log("Creating product catalog...")
        
        products_data = [
            # Electronics
            {"name": "Wireless Bluetooth Headphones", "category": "Electronics", "price": 79.99},
            {"name": "Smartphone Protective Case", "category": "Electronics", "price": 24.99},
            {"name": "Adjustable Laptop Stand", "category": "Electronics", "price": 45.99},
            {"name": "USB-C Charging Cable", "category": "Electronics", "price": 12.99},
            {"name": "Portable Power Bank", "category": "Electronics", "price": 34.99},
            
            # Clothing
            {"name": "Premium Cotton T-Shirt", "category": "Clothing", "price": 19.99},
            {"name": "Classic Denim Jeans", "category": "Clothing", "price": 59.99},
            {"name": "Athletic Running Shoes", "category": "Clothing", "price": 89.99},
            {"name": "Winter Insulated Jacket", "category": "Clothing", "price": 129.99},
            {"name": "Casual Baseball Cap", "category": "Clothing", "price": 16.99},
            
            # Home & Kitchen
            {"name": "Stainless Steel Coffee Maker", "category": "Home", "price": 89.99},
            {"name": "LED Desk Lamp", "category": "Home", "price": 39.99},
            {"name": "Kitchen Knife Set", "category": "Home", "price": 67.99},
            {"name": "Non-Stick Cookware Set", "category": "Home", "price": 149.99},
            {"name": "Ceramic Dinnerware Set", "category": "Home", "price": 79.99},
            
            # Office Supplies
            {"name": "Professional Notebook Set", "category": "Office", "price": 14.99},
            {"name": "Premium Pen Collection", "category": "Office", "price": 29.99},
            {"name": "Desktop Organizer", "category": "Office", "price": 22.99},
            {"name": "Ergonomic Mouse Pad", "category": "Office", "price": 18.99},
            {"name": "Wireless Computer Mouse", "category": "Office", "price": 35.99},
            
            # Sports & Outdoors
            {"name": "Professional Basketball", "category": "Sports", "price": 28.99},
            {"name": "Yoga Exercise Mat", "category": "Sports", "price": 32.99},
            {"name": "Camping Tent (4-Person)", "category": "Sports", "price": 159.99},
            {"name": "Fishing Rod Kit", "category": "Sports", "price": 74.99},
            {"name": "Hiking Backpack", "category": "Sports", "price": 89.99}
        ]
        
        admin_token = list(self.tokens.values())[0] if self.tokens else None
        
        for product_info in products_data:
            product_data = {
                "name": product_info["name"],
                "description": f"High-quality {product_info['name'].lower()} perfect for daily use. Excellent build quality and great value.",
                "price": product_info["price"],
                "quantity": random.randint(25, 200),
                "sku": f"SKU-{random.randint(10000, 99999)}",
                "minStockLevel": random.randint(5, 15),
                "maxStockLevel": random.randint(100, 300),
                "weight": round(random.uniform(0.1, 5.0), 2),
                "dimensions": {
                    "length": round(random.uniform(5, 40), 1),
                    "width": round(random.uniform(5, 30), 1),
                    "height": round(random.uniform(2, 20), 1)
                },
                "barcode": f"{random.randint(1000000000000, 9999999999999)}",
                "status": "active"
            }
            
            response = self.make_request("POST", "/products", product_data, admin_token)
            
            if response and response.status_code == 201:
                result = response.json()
                self.products.append(result["data"])
                self.log(f"✅ Created: {product_info['name']}")
            else:
                error_msg = response.json().get("message", "Unknown error") if response else "No response"
                if "already exists" in error_msg:
                    self.log(f"⏭️ Skipped: {product_info['name']} (already exists)")
                else:
                    self.log(f"❌ Failed: {product_info['name']} - {error_msg}")
            
            time.sleep(0.5)  # Small delay between products
    
    def run(self):
        """Run the data generation process"""
        self.log("🚀 Starting Rapid Sort Data Generation")
        self.log("=" * 60)
        
        # Check backend
        response = self.make_request("GET", "/health")
        if not response or response.status_code != 200:
            self.log("❌ Backend server is not running on http://localhost:5000")
            self.log("   Please start the backend: cd backend && npm run dev")
            return
        
        self.log("✅ Backend server is running")
        
        # Create users
        self.create_users()
        if not self.users:
            self.log("❌ No users created, stopping generation")
            return
        
        time.sleep(2)
        
        # Create products
        self.create_products()
        
        # Summary
        self.log("=" * 60)
        self.log("📊 Data Generation Summary:")
        self.log(f"   👥 Users created/authenticated: {len(self.users)}")
        self.log(f"   📦 Products created: {len(self.products)}")
        self.log("   ⚠️  Orders: Skipped (backend endpoint issues)")
        self.log("=" * 60)
        self.log("✅ Data generation completed successfully!")
        
        if self.users:
            self.log("")
            self.log("🌐 Login Credentials (password: password123):")
            for user in self.users:
                role_emoji = "👑" if user['role'] == 'admin' else "👔" if user['role'] == 'manager' else "👤"
                self.log(f"   {role_emoji} {user['email']} - {user['role']} ({user['department']})")
        
        self.log("")
        self.log("🎯 Next Steps:")
        self.log("   1. Open your frontend application")
        self.log("   2. Login with any of the above credentials")
        self.log("   3. Explore the inventory management features")
        self.log("   4. View the created products in the system")

if __name__ == "__main__":
    generator = WorkingDataGenerator()
    generator.run()