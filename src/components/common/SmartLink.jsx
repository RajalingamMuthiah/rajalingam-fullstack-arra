import { forwardRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";

/**
 * One link component for every call to action. Pass a destination object from
 * data/portfolio.js (`destinations`) or the props directly:
 *   to      → client-side route            { to: "/resume" }
 *   section → section on Home              { section: "pathwise" }
 *   href    → external URL / mailto        { href: "https://wa.me/…" }
 * External http(s) links open in a new tab.
 */
const SmartLink = forwardRef(
  ({ to, section, href, children, onClick, ...rest }, ref) => {
    const location = useLocation();
    const navigate = useNavigate();

    if (href) {
      const external = /^https?:/.test(href);
      return (
        <a
          ref={ref}
          href={href}
          onClick={onClick}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }

    if (section) {
      return (
        <a
          ref={ref}
          href={`/#${section}`}
          onClick={(e) => {
            e.preventDefault();
            onClick?.(e);
            if (location.pathname === "/") scrollToSection(section);
            else navigate("/", { state: { scrollTo: section } });
          }}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} to={to} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  },
);

SmartLink.displayName = "SmartLink";

export default SmartLink;
