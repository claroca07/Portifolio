import { useEffect, useState } from "react";

function ProgressBar({ sectionRef }) {
  // Estado para armazenar o progresso em porcentagem (0 a 100)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return; // se a referência da seção não existir, sai da função

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      const start = windowHeight - rect.top;
      const end = sectionHeight + windowHeight;

      let percent = (start / end) * 100;

      percent = Math.max(0, Math.min(100, percent));

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "4px",
        backgroundColor: "#0e142b",
        marginRight: "20px"
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${progress}%`,
          backgroundColor: "#1e8eff",
          transition: "height 0.25s ease-out",
          boxShadow: "0 0 12px #438bff"
        }}
      />
    </div>
  );
}

export default ProgressBar;