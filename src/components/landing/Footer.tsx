const Footer = () => {
  const links = [
    { label: "Research", href: "#" },
    { label: "For Hospitals", href: "#" },
    { label: "Data & Privacy", href: "#" },
    { label: "Compliance", href: "#compliance" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg font-bold text-foreground tracking-tight">
              Vaidya<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Clinical AI Intelligence for India · Built in India
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Vaidya Health Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
