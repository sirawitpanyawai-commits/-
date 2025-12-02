  const menuBtn = document.getElementById('menuBtn');
      const sidebar = document.getElementById('sidebar');
      const closeBtn = document.getElementById('closeBtn');
      const overlay = document.getElementById('overlay');

      menuBtn.onclick = () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      };

      const closeSidebar = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      };

      closeBtn.onclick = closeSidebar;
    overlay.onclick = closeSidebar;