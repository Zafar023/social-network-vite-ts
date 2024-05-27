// src/components/UI/AppLink/AppLink.tsx
type TOAppLink = {
    linkText: string;
    href: string;
  };
  
  export const AppLink = ({ linkText, href }: TOAppLink) => {
    return <a href={href}>{linkText}</a>;
  };
  

  