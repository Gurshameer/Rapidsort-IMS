# Microsoft Clarity Analytics Setup Guide

Microsoft Clarity is now integrated into the Rapid Sort application to provide user behavior analytics, heatmaps, and session recordings.

## 🚀 Quick Start

### 1. Get Your Clarity Project ID

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Sign in with your Microsoft account
3. Create a new project
4. Copy your Project ID

### 2. Configure the Project ID

Open `frontend/public/index.html` and replace `YOUR_CLARITY_PROJECT_ID` with your actual project ID:

```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "YOUR_PROJECT_ID_HERE");
</script>
```

## 📊 Features Tracked

### Automatic Tracking
- **Page Views**: Automatically tracked on route changes
- **User Sessions**: Session recordings and heatmaps
- **Click Events**: All user interactions
- **Scroll Depth**: How far users scroll on pages
- **Form Interactions**: Input focus and submissions

### Custom Events
The following custom events are tracked:

#### Authentication
- `auth_login` - User login
- `auth_logout` - User logout
- `auth_signup` - New user registration

#### Product Management
- `product_view` - Product details viewed
- `product_create` - New product created
- `product_update` - Product updated
- `product_delete` - Product deleted

#### Order Management
- `order_create` - New order created
- `order_update` - Order updated
- `order_view` - Order details viewed

#### WebSocket Events
- `websocket_connect` - WebSocket connected
- `websocket_disconnect` - WebSocket disconnected
- `websocket_message` - WebSocket message received

#### User Actions
- `search` - Search performed
- `export` - Data exported (PDF/Excel/CSV)
- `error` - Error occurred

## 🔧 Usage in Components

### Using the Clarity Hook

```tsx
import { useClarity } from '../contexts/ClarityContext';

function MyComponent() {
  const { trackEvent, trackAction, trackProductInteraction } = useClarity();

  const handleProductView = (productId: string) => {
    trackProductInteraction('view', productId);
  };

  const handleSearch = (query: string, results: number) => {
    trackSearch(query, results);
  };

  const handleExport = () => {
    trackExport('pdf', 'products');
  };

  return (
    // Your component JSX
  );
}
```

### Direct Service Usage

```tsx
import { clarityService } from '../services/clarity';

// Track custom event
clarityService.trackEvent('custom_event', { key: 'value' });

// Set user ID
clarityService.setUserId('user123');

// Set custom tags
clarityService.setTag('subscription', 'premium');
```

## 📈 Available Methods

### ClarityService Methods

| Method | Description | Example |
|--------|-------------|---------|
| `trackEvent(name, metadata?)` | Track custom event | `trackEvent('button_click', { button: 'submit' })` |
| `setUserId(userId)` | Identify user | `setUserId('user123')` |
| `setTag(key, value)` | Set session tag | `setTag('plan', 'premium')` |
| `trackPageView(pageName)` | Track page view | `trackPageView('dashboard')` |
| `trackAction(action, details?)` | Track user action | `trackAction('filter_applied', { type: 'category' })` |
| `trackProductInteraction(action, id?)` | Track product events | `trackProductInteraction('create', 'prod123')` |
| `trackOrderInteraction(action, id?)` | Track order events | `trackOrderInteraction('create', 'order456')` |
| `trackAuth(action, userId?)` | Track auth events | `trackAuth('login', 'user123')` |
| `trackError(type, message)` | Track errors | `trackError('api', 'Failed to fetch')` |
| `trackWebSocket(action, details?)` | Track WebSocket events | `trackWebSocket('connect')` |
| `trackSearch(query, count)` | Track searches | `trackSearch('laptop', 25)` |
| `trackExport(type, dataType)` | Track exports | `trackExport('pdf', 'report')` |

## 🎯 Best Practices

### 1. Track Important User Actions
```tsx
// Good: Track meaningful business events
trackProductInteraction('create', productId);
trackOrderInteraction('complete', orderId);

// Avoid: Over-tracking trivial events
// trackEvent('mouse_move'); // Too granular
```

### 2. Use Descriptive Event Names
```tsx
// Good: Clear and descriptive
trackEvent('checkout_completed', { total: 150, items: 3 });

// Avoid: Vague names
// trackEvent('event1'); // Not descriptive
```

### 3. Include Relevant Metadata
```tsx
// Good: Contextual information
trackSearch('laptop', 25);
trackExport('pdf', 'monthly_report');

// Avoid: Missing context
// trackEvent('search'); // No query info
```

### 4. Respect User Privacy
- Don't track sensitive information (passwords, credit cards)
- Don't include PII in event names or metadata
- Follow GDPR and privacy regulations

## 🔍 Viewing Analytics

1. Go to [Microsoft Clarity Dashboard](https://clarity.microsoft.com/)
2. Select your project
3. View:
   - **Dashboard**: Overview of metrics
   - **Recordings**: Watch user sessions
   - **Heatmaps**: See where users click
   - **Insights**: AI-powered insights

## 🛠️ Troubleshooting

### Clarity Not Loading
1. Check that Project ID is correct in `index.html`
2. Verify script is loading (check Network tab)
3. Check browser console for errors

### Events Not Appearing
1. Wait 2-3 minutes for events to appear
2. Check that `clarityService.isEnabled` is true
3. Verify events are being called (check console logs)

### Session Recordings Not Working
1. Ensure Clarity script is loaded before app initialization
2. Check that cookies are enabled
3. Verify domain is whitelisted in Clarity settings

## 🔐 Privacy & Compliance

### Data Collected
- User interactions (clicks, scrolls, navigation)
- Session recordings (visual representation)
- Device and browser information
- Page performance metrics

### Data NOT Collected
- Passwords or sensitive form inputs
- Payment information
- Personal identifiable information (unless explicitly tracked)

### Compliance
- GDPR compliant
- CCPA compliant
- Cookie consent recommended
- Privacy policy should mention analytics

## 📚 Additional Resources

- [Clarity Documentation](https://docs.microsoft.com/en-us/clarity/)
- [Clarity API Reference](https://docs.microsoft.com/en-us/clarity/setup-and-installation/clarity-api)
- [Privacy & Security](https://docs.microsoft.com/en-us/clarity/privacy-and-security)

## 🎨 Clarity Design Principles Applied

Beyond analytics, we've applied Clarity design principles:

1. **Clear Visual Hierarchy**: Consistent spacing and typography
2. **Purposeful Motion**: Smooth, meaningful animations
3. **Accessible Design**: WCAG 2.1 AA compliance
4. **Responsive Layout**: Mobile-first approach
5. **Consistent Patterns**: Reusable components
6. **Performance First**: Optimized loading and rendering

---

**Note**: Remember to replace `YOUR_CLARITY_PROJECT_ID` with your actual project ID before deploying to production!