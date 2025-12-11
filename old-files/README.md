# Absher Financial Support Service for Inmates

## خدمة الدعم المادي للنزلاء - منصة أبشر

A complete web implementation of the Absher Financial Support feature that allows users to deposit money for inmates in Saudi prisons.

---

## 📁 Project Structure

```
absher-financial-support/
├── index.html                      # Login page
├── home.html                       # Home page with services
├── services.html                   # Services menu (My Services)
├── financial-support-intro.html    # Feature introduction/welcome
├── search-inmate.html             # Search for inmate form
├── select-service.html            # Choose one-time or recurring
├── one-time-transaction.html      # Amount selection for one-time
├── transaction-summary.html        # Review transaction details
├── payment.html                    # Payment options (Apple Pay, Card)
├── confirmation.html               # Success confirmation
├── recurring-deposits.html         # Recurring deposits option
├── choose-month.html              # Calendar for recurring deposits
├── styles.css                      # All styles (shared)
└── script.js                       # All JavaScript (shared)
```

---

## 🚀 How to Use

### 1. Open the Project

Simply open `index.html` in your web browser to start.

### 2. Login

- Enter any username and password
- Click "تسجيل الدخول" (Login)

### 3. Navigate to Financial Support Service

**Path 1 (Quick):**

- From home → Click "خدماتي" (My Services)
- Click the first card "توصيل الوثائق بالبريد"
- This takes you to the Financial Support intro

**Path 2 (Direct):**

- Open `financial-support-intro.html` directly

### 4. Complete the Flow

**One-Time Deposit Flow:**

1. **Search Inmate** → Enter inmate number/name → Select from results
2. **Select Service** → Choose "إيداع فوري" (One-time deposit)
3. **Choose Amount** → Select preset amount or enter custom amount
4. **Review Summary** → Verify all details
5. **Payment** → Choose payment method (Apple Pay or Card)
6. **Confirmation** → See success message

**Recurring Deposit Flow:**

1. **Search Inmate** → Enter inmate number/name → Select from results
2. **Select Service** → Choose "جدولة الإيداعات" (Recurring deposits)
3. **Choose Duration** → Select period and dates using calendar
4. **Review Summary** → Verify all details
5. **Payment** → Choose payment method
6. **Confirmation** → See success message

---

## ✨ Features

### 🎨 Design

- ✅ Authentic Absher styling with green theme (#1B7B4C)
- ✅ Complete Arabic RTL support
- ✅ Responsive mobile-first design
- ✅ Progress indicators for multi-step flow
- ✅ Professional Saudi government portal look

### 🔧 Functionality

- ✅ Form validation
- ✅ Session management (SessionStorage)
- ✅ Interactive payment options
- ✅ Calendar date picker
- ✅ Amount selection (preset + custom)
- ✅ Progress tracking
- ✅ Dynamic content loading

### 📱 Pages

- ✅ Login with password toggle
- ✅ Home page with service cards
- ✅ Services menu
- ✅ Welcome/intro page
- ✅ Inmate search with popup selection
- ✅ Service type selection
- ✅ One-time deposit flow (5 steps)
- ✅ Recurring deposit flow (6 steps)
- ✅ Transaction summary
- ✅ Payment page with expandable options
- ✅ Success confirmation

---

## 🔑 Key Components

### CSS Features

- Custom CSS variables for easy theming
- Modular component styles
- Responsive grid layouts
- Smooth transitions and animations
- RTL-optimized layouts

### JavaScript Features

- Session management utilities
- Form validation
- Dynamic content loading
- Progress bar management
- Calendar generation
- Payment option toggles
- Navigation helpers

---

## 🎯 User Flow Diagram

```
Login → Home → Services → Financial Support Intro
                              ↓
                        Search Inmate
                              ↓
                    ┌─────────┴─────────┐
                    ↓                   ↓
            One-Time Deposit    Recurring Deposits
                    ↓                   ↓
            Select Amount       Choose Months/Calendar
                    ↓                   ↓
            Transaction Summary ←───────┘
                    ↓
                Payment
                    ↓
              Confirmation
```

---

## 💡 Customization

### Change Theme Colors

Edit `styles.css` variables:

```css
:root {
  --primary-green: #1b7b4c;
  --dark-green: #155a39;
  --light-green: #e8f5e9;
  /* ... other colors ... */
}
```

### Modify Payment Options

Edit `payment.html` to add/remove payment methods.

### Update Inmate Data

Edit `searchInmate()` function in `script.js` to connect to real API.

---

## 📝 Notes

### Session Storage

The app uses `SessionStorage` to store:

- User login status
- Selected inmate information
- Service type (one-time/recurring)
- Selected amount
- Transaction details

### Form Validation

All required fields are validated before proceeding to next step.

### Progress Indicators

5 steps for one-time deposits, 6 steps for recurring deposits.

---

## 🌐 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

## 📱 Mobile Responsive

All pages are fully responsive and optimized for:

- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)

---

## 🔐 Security Notes

This is a **frontend prototype** only. For production:

- Implement backend API integration
- Add proper authentication/authorization
- Use HTTPS for all transactions
- Implement payment gateway integration
- Add data encryption
- Follow PCI DSS standards for payment data

---

## 📞 Support

This is a demonstration project based on the Figma prototype provided.

---

## 📄 License

This project is created for educational/demonstration purposes.

---

**Created with ❤️ for Absher Taweeq Hackathon**
