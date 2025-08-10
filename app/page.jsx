import ContentContainer from "../components/ContentContainer";

export default function Page() {
  return (
    <ContentContainer>
      <img
        src="/ldn.avif"
        alt="Profile"
        className="w-11/12 md:w-3/4 max-w-[500px] aspect-square rounded-full border-[7px] border-white mx-auto mb-10"
      />
      <h1
        className="text-white text-center mb-0 leading-normal mx-auto"
        style={{ fontSize: "clamp(3rem, 6vw, 4rem)" }}
      >
        <span className="font-light">Hi, I'm</span>{" "}
        <span className="font-bold">Your Name Here.</span>
      </h1>
    </ContentContainer>
  );
}
