import Hero from "../components/Hero";
import ModsSection from "../components/ModsSection";
import PluginsSection from "../components/PluginsSection";
import ShadersSection from "../components/ShadersSection";
import BlogSection from "../components/BlogSection";
import InfoSection from "../components/InfoSection";
import VersionsSection from "../components/VersionsSection";
import NewsSection from "../components/NewsSection";
import VideosSection from "../components/VideosSection";
import MapsSection from "../components/MapsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ModsSection />
      <PluginsSection />
      <ShadersSection />
      <BlogSection />
      <InfoSection />
      <VersionsSection />
      <NewsSection />
      <VideosSection />
      <MapsSection />
    </main>
  );
}
