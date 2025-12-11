
        function updateTime() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            document.getElementById('currentTime').textContent = `${hours}:${minutes}`;
        }
        updateTime();
        setInterval(updateTime, 60000);

        function showNotification() {
            const notification = document.getElementById('notification');
            const btn = document.getElementById('triggerBtn');
            
            notification.classList.add('show');
            btn.classList.add('hidden');
        }

        function openChat() {
            const notification = document.getElementById('notification');
            const chatView = document.getElementById('chatView');
            
            notification.classList.remove('show');
            chatView.classList.add('show');
        }

        setTimeout(() => {
            showNotification();
        }, 1000);
