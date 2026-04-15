export function scrollToContact() {
  const target = document.getElementById('contact');
  if (!target) return;
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const duration = 900;
  let startTime: number | null = null;
  const animate = (now: number) => {
    if (!startTime) startTime = now;
    const progress = Math.min((now - startTime) / duration, 1);
    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    window.scrollTo(0, start + (end - start) * ease);
    if (progress < 1) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}
