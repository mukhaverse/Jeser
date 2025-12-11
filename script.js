// Absher Financial Support - Main JavaScript

// Utility Functions
function formatAmount(amount) {
    return amount.toLocaleString('ar-SA') + ' ر.س';
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('ar-SA');
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--error)';
        } else {
            input.style.borderColor = '#E0E0E0';
        }
    });
    
    return isValid;
}

// Session Storage Management
const SessionManager = {
    set: (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    
    get: (key) => {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    
    remove: (key) => {
        sessionStorage.removeItem(key);
    },
    
    clear: () => {
        sessionStorage.clear();
    }
};

// Login Page Functions
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        SessionManager.set('user', { username, loggedIn: true });
        window.location.href = 'home.html';
    } else {
        showError('الرجاء إدخال اسم المستخدم وكلمة المرور');
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.password-toggle');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.innerHTML = '👁️';
    } else {
        passwordInput.type = 'password';
        toggleBtn.innerHTML = '🔒';
    }
}

// Search Inmate Functions
function searchInmate() {
    const searchType = document.querySelector('input[name="searchType"]:checked').value;
    const searchInput = document.getElementById('searchInput').value;
    
    if (!searchInput) {
        showError('الرجاء إدخال رقم أو اسم النزيل');
        return;
    }
    
    // Simulate search results
    const inmates = [
        { id: 1, name: 'احمد بن محمد', number: '0000000000', prison: 'اصلاحية مكة', city: 'مكة المكرمة', task: 'اختبار' }
    ];
    
    showInmatePopup(inmates);
}

function updateInmateInfo() {
    const select = document.getElementById('inmateNumberSelect');
    const selectedOption = select.options[select.selectedIndex];
    
    if (selectedOption.value) {
        // Show the details section
        document.getElementById('inmateDetails').style.display = 'block';
        
        // Populate the fields
        document.getElementById('prisonName').value = selectedOption.getAttribute('data-prison');
        document.getElementById('cityName').value = selectedOption.getAttribute('data-city');
        document.getElementById('taskName').value = selectedOption.getAttribute('data-task');
        
        // Store in session
        SessionManager.set('selectedInmate', {
            id: selectedOption.value,
            name: selectedOption.getAttribute('data-name'),
            number: selectedOption.getAttribute('data-number'),
            prison: selectedOption.getAttribute('data-prison'),
            city: selectedOption.getAttribute('data-city'),
            task: selectedOption.getAttribute('data-task')
        });
    } else {
        document.getElementById('inmateDetails').style.display = 'none';
    }
}

function proceedWithSelectedInmate() {
    const inmate = SessionManager.get('selectedInmate');
    
    if (!inmate) {
        showError('الرجاء اختيار نزيل');
        return;
    }
    
    window.location.href = 'select-service.html';
}

function showInmatePopup(inmates) {
    const popup = document.getElementById('inmatePopup');
    const inmateList = document.getElementById('inmateList');
    
    inmateList.innerHTML = inmates.map(inmate => `
        <div class="inmate-item" onclick="selectInmate(${inmate.id}, '${inmate.name}', '${inmate.number}')">
            <div class="inmate-name">${inmate.name}</div>
            <div class="inmate-number">${inmate.number}</div>
        </div>
    `).join('');
    
    popup.classList.add('active');
}

function selectInmate(id, name, number) {
    SessionManager.set('selectedInmate', { id, name, number });
    document.getElementById('inmatePopup').classList.remove('active');
    window.location.href = 'select-service.html';
}

function closePopup() {
    document.querySelectorAll('.popup-overlay').forEach(popup => {
        popup.classList.remove('active');
    });
}

// Service Selection Functions
function selectService(serviceType) {
    SessionManager.set('serviceType', serviceType);
    
    if (serviceType === 'one-time') {
        window.location.href = 'one-time-transaction.html';
    } else if (serviceType === 'recurring') {
        window.location.href = 'recurring-deposits.html';
    }
}

// Amount Selection Functions
function selectAmount(amount) {
    // Remove previous selection
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    event.target.classList.add('selected');
    
    // Clear custom amount if predefined amount is selected
    const customInput = document.getElementById('customAmount');
    if (customInput) {
        customInput.value = '';
    }
    
    SessionManager.set('selectedAmount', amount);
}

function updateCustomAmount() {
    const customAmount = document.getElementById('customAmount').value;
    
    if (customAmount) {
        // Remove selection from predefined amounts
        document.querySelectorAll('.amount-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        SessionManager.set('selectedAmount', parseFloat(customAmount));
    }
}

function proceedToSummary() {
    const amount = SessionManager.get('selectedAmount');
    
    if (!amount) {
        showError('الرجاء اختيار أو إدخال المبلغ');
        return;
    }
    
    window.location.href = 'transaction-summary.html';
}

// Transaction Summary Functions
function loadTransactionSummary() {
    const inmate = SessionManager.get('selectedInmate');
    const amount = SessionManager.get('selectedAmount');
    
    if (!inmate || !amount) {
        window.location.href = 'search-inmate.html';
        return;
    }
    
    // Update summary display
    document.getElementById('donorName').textContent = 'احمد بن محمد'; // From user session
    document.getElementById('donorId').textContent = '0000000000';
    document.getElementById('inmateName').textContent = inmate.name;
    document.getElementById('inmateNumber').textContent = inmate.number;
    document.getElementById('prison').textContent = 'اصلاحية مكة';
    document.getElementById('city').textContent = 'مكة المكرمة';
    document.getElementById('depositDate').textContent = new Date().toLocaleDateString('ar-SA');
    document.getElementById('depositAmount').textContent = formatAmount(amount);
    document.getElementById('depositMethod').textContent = 'فوري';
    document.getElementById('totalAmount').textContent = formatAmount(amount);
}

function proceedToPayment() {
    window.location.href = 'payment.html';
}

// Payment Functions
function togglePaymentOption(optionId) {
    const option = document.getElementById(optionId);
    const allOptions = document.querySelectorAll('.payment-option');
    
    allOptions.forEach(opt => {
        if (opt.id !== optionId) {
            opt.classList.remove('expanded');
            const details = opt.querySelector('.payment-details');
            if (details) details.style.display = 'none';
        }
    });
    
    option.classList.toggle('expanded');
    const details = option.querySelector('.payment-details');
    if (details) {
        details.style.display = option.classList.contains('expanded') ? 'block' : 'none';
    }
}

function processPayment() {
    const amount = SessionManager.get('selectedAmount');
    
    if (!amount) {
        showError('خطأ في معالجة الدفع');
        return;
    }
    
    // Simulate payment processing
    showLoading();
    
    setTimeout(() => {
        SessionManager.set('transactionId', generateTransactionId());
        SessionManager.set('transactionDate', new Date().toISOString());
        window.location.href = 'confirmation.html';
    }, 2000);
}

// Confirmation Functions
function loadConfirmation() {
    const transactionId = SessionManager.get('transactionId');
    const amount = SessionManager.get('selectedAmount');
    const inmate = SessionManager.get('selectedInmate');
    
    if (!transactionId) {
        window.location.href = 'home.html';
        return;
    }
    
    document.getElementById('transactionId').textContent = transactionId;
    document.getElementById('confirmationAmount').textContent = formatAmount(amount);
    document.getElementById('confirmationInmate').textContent = inmate.name;
}

function viewPreviousTransactions() {
    alert('سيتم عرض المعاملات السابقة');
}

function goToHomePage() {
    SessionManager.clear();
    window.location.href = 'home.html';
}

// Recurring Deposits Functions
let recurringState = {
    currentStep: 1,
    duration: null,
    amount: null,
    startDate: null,
    endDate: null,
    currentCalendarMonth: 11, // December (0-indexed)
    currentCalendarYear: 2025
};

function selectDuration(months, element) {
    // Remove previous selection
    document.querySelectorAll('.schedule-option > div').forEach(div => {
        div.style.borderColor = '#E0E0E0';
        div.style.backgroundColor = '';
    });
    
    // Highlight selected
    element.querySelector('div').style.borderColor = 'var(--border-green)';
    element.querySelector('div').style.backgroundColor = 'var(--light-green)';
    
    // Store selection
    recurringState.duration = months;
    
    // Show step 2
    document.getElementById('step2').style.display = 'block';
    
    // Scroll to step 2
    document.getElementById('step2').scrollIntoView({ behavior: 'smooth' });
}

function selectRecurringAmount(amount) {
    // Remove previous selection
    document.querySelectorAll('#step2 .amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    event.target.classList.add('selected');
    
    // Store amount
    recurringState.amount = amount;
    
    // Show step 3 and calendar
    document.getElementById('step3').style.display = 'block';
    generateCalendar(recurringState.currentCalendarYear, recurringState.currentCalendarMonth);
    
    // Show next button
    document.getElementById('nextBtn').style.display = 'block';
    
    // Scroll to step 3
    document.getElementById('step3').scrollIntoView({ behavior: 'smooth' });
}

function changeMonth(direction) {
    recurringState.currentCalendarMonth += direction;
    
    if (recurringState.currentCalendarMonth > 11) {
        recurringState.currentCalendarMonth = 0;
        recurringState.currentCalendarYear++;
    } else if (recurringState.currentCalendarMonth < 0) {
        recurringState.currentCalendarMonth = 11;
        recurringState.currentCalendarYear--;
    }
    
    // Update month display
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    document.getElementById('currentMonth').textContent = `${months[recurringState.currentCalendarMonth]} ${recurringState.currentCalendarYear}`;
    
    // Regenerate calendar
    generateCalendar(recurringState.currentCalendarYear, recurringState.currentCalendarMonth);
}

function proceedToNext() {
    if (!recurringState.duration || !recurringState.amount) {
        showError('الرجاء اختيار المدة والمبلغ');
        return;
    }
    
    // Save to session
    SessionManager.set('recurringDeposit', recurringState);
    SessionManager.set('selectedAmount', recurringState.amount * recurringState.duration);
    
    window.location.href = 'transaction-summary.html';
}

function showMonthCalendar() {
    window.location.href = 'choose-month.html';
}

// Helper Functions
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const content = document.querySelector('.content');
    if (content) {
        content.insertBefore(errorDiv, content.firstChild);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
}

function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = '<p>جاري المعالجة...</p>';
    loadingDiv.id = 'loadingIndicator';
    
    document.body.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingDiv = document.getElementById('loadingIndicator');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

function generateTransactionId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `${timestamp}${random}`;
}

// Progress Bar Functions
function updateProgress(currentStep) {
    const steps = document.querySelectorAll('.step');
    const progressLine = document.querySelector('.progress-line-active');
    
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (index === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
    
    if (progressLine) {
        const progressPercentage = (currentStep / (steps.length - 1)) * 100;
        progressLine.style.width = `${progressPercentage}%`;
    }
}

// Calendar Functions
function generateCalendar(year, month) {
    const calendar = document.getElementById('calendar');
    if (!calendar) return;
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const dayNames = ['س', 'ح', 'ن', 'ث', 'ر', 'خ', 'ج'];
    
    let html = '<div class="calendar-days">';
    
    // Add day names
    dayNames.forEach(day => {
        html += `<div class="calendar-day header">${day}</div>`;
    });
    
    // Add empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="calendar-day"></div>';
    }
    
    // Add days
    for (let day = 1; day <= daysInMonth; day++) {
        html += `<div class="calendar-day" onclick="selectDay(${day})">${day}</div>`;
    }
    
    html += '</div>';
    calendar.innerHTML = html;
}

function selectDay(day) {
    document.querySelectorAll('.calendar-day').forEach(d => {
        d.classList.remove('selected');
    });
    
    event.target.classList.add('selected');
    
    // If in recurring deposits flow
    if (recurringState && recurringState.duration) {
        const selectedDate = new Date(recurringState.currentCalendarYear, recurringState.currentCalendarMonth, day);
        
        if (!recurringState.startDate) {
            recurringState.startDate = selectedDate;
            document.getElementById('startDate').textContent = formatDate(selectedDate);
        } else {
            recurringState.endDate = selectedDate;
            document.getElementById('endDate').textContent = formatDate(selectedDate);
        }
    } else {
        // Regular single day selection
        SessionManager.set('selectedDay', day);
    }
}

// Navigation Functions
function goBack() {
    window.history.back();
}

function goToPage(page) {
    window.location.href = page;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in for protected pages
    const protectedPages = ['home.html', 'services.html', 'search-inmate.html', 'select-service.html', 
                           'one-time-transaction.html', 'transaction-summary.html', 'payment.html', 
                           'confirmation.html', 'recurring-deposits.html', 'choose-month.html'];
    
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        const user = SessionManager.get('user');
        if (!user || !user.loggedIn) {
            window.location.href = 'index.html';
        }
    }
    
    // Load page-specific data
    if (currentPage === 'transaction-summary.html') {
        loadTransactionSummary();
    } else if (currentPage === 'confirmation.html') {
        loadConfirmation();
    }
});

// Export functions for use in HTML onclick attributes
window.handleLogin = handleLogin;
window.togglePassword = togglePassword;
window.searchInmate = searchInmate;
window.updateInmateInfo = updateInmateInfo;
window.proceedWithSelectedInmate = proceedWithSelectedInmate;
window.selectInmate = selectInmate;
window.closePopup = closePopup;
window.selectService = selectService;
window.selectAmount = selectAmount;
window.updateCustomAmount = updateCustomAmount;
window.proceedToSummary = proceedToSummary;
window.proceedToPayment = proceedToPayment;
window.togglePaymentOption = togglePaymentOption;
window.processPayment = processPayment;
window.viewPreviousTransactions = viewPreviousTransactions;
window.goToHomePage = goToHomePage;
window.showMonthCalendar = showMonthCalendar;
window.selectDuration = selectDuration;
window.selectRecurringAmount = selectRecurringAmount;
window.changeMonth = changeMonth;
window.proceedToNext = proceedToNext;
window.selectMonth = selectMonth;
window.selectDay = selectDay;
window.goBack = goBack;
window.goToPage = goToPage;
