function toggleFolder(folderId) {
  const list = document.getElementById(folderId);
  const icon = document.getElementById('icon-' + folderId);

  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
    icon.innerText = 'expand_more';
  } else {
    list.classList.add('hidden');
    icon.innerText = 'chevron_right';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content-container');
  const sections = document.querySelectorAll('.section-block');
  const navLinks = document.querySelectorAll('.nav-item');
  const headerPath = document.getElementById('header-path');
  const headerFile = document.getElementById('header-file');

  let isManualClick = false;
  let scrollTimeout;

  function setActiveState(link) {
    navLinks.forEach(l => {
      l.classList.remove('bg-ctp_surface0', 'text-ctp_green', 'font-bold');
      l.classList.add('text-ctp_subtext0');
    });

    link.classList.add('bg-ctp_surface0', 'text-ctp_green', 'font-bold');
    link.classList.remove('text-ctp_subtext0');

    const path = link.getAttribute('data-path');
    const file = link.getAttribute('data-file');

    if (headerFile.innerText !== file) {
      headerPath.innerText = path.replace(/\//g, ' / ');
      headerFile.innerText = file;
    }

    sections.forEach(section => {
      section.classList.add('transition-colors', 'duration-300');
      section.classList.remove('border-ctp_green');
      section.classList.add('border-transparent');
    });

    const targetId = link.getAttribute('href').substring(1); // remove '#'
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.classList.remove('border-transparent');
      targetSection.classList.add('border-ctp_green');
    }
  }

  // Add click listeners to handle manual navigation
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      isManualClick = true;
      setActiveState(link);

      // Clear any existing timeout and set a new one
      // We lock the scroll spy for 1s to allow smooth scroll to finish
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isManualClick = false;
      }, 1000);
    });
  });

  container.addEventListener('scroll', () => {
    // Skip scroll spy logic if user just clicked a link
    if (isManualClick) return;

    let current = '';
    const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 5;

    // 1. Check position of sections
    sections.forEach(section => {
      const sectionTop = section.offsetTop - container.offsetTop;
      if (container.scrollTop >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    // 2. Override with last link ONLY if we are physically at bottom AND no specific section was caught
    // (Or purely rely on bottom check if that's preferred behavior for manual scrolling)
    if (isAtBottom && navLinks.length > 0) {
      const lastLink = navLinks[navLinks.length - 1];
      current = lastLink.getAttribute('href').substring(1);
    }

    // 3. Find and activate the link corresponding to 'current'
    const activeLink = Array.from(navLinks).find(link => link.getAttribute('href').substring(1) === current);
    if (activeLink) {
      setActiveState(activeLink);
    }
  });
});
