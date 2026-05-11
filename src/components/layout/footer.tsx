import { Footer7 } from "@/components/ui/footer-7";
import tidewrkLogo from "@/assets/images/tidewrk-logo.svg";

export function Footer() {
  return <Footer7 logo={{ url: "/", src: tidewrkLogo.src, alt: "Tidewrk", title: "Tidewrk" }} />;
}
