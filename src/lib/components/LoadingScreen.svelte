<!-- Simple Loading Indicator - No colored background -->
<div class="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
  <!-- Progress Bar at top -->
  <div class="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse shadow-lg">
    <div class="h-full bg-white/30 animate-shimmer"></div>
  </div>
  
  <!-- Small spinner in center (optional) -->
  <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
  </div>
</div>

<style>
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .animate-shimmer {
    animation: shimmer 1.5s infinite;
  }
</style>
