const script = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var c=document.documentElement.classList;if(d){c.add('dark')}else{c.remove('dark')}}catch(e){}})();`;

// Runs before hydration so the dark class is applied pre-paint (no flash).
// Kept inline in the document rather than a bundled file on purpose.
export function ThemeInitScript() {
  return <script id="theme-init" dangerouslySetInnerHTML={{ __html: script }} />;
}
