import { Carousel, ContentBlock } from "@/components/molecules";

const Introduction = ({}) => {
  return (
    <Carousel hideHelp={[0, 1, 3]} hideNav={[0, 3]}>
      <div className="embla-slide align">
        <ContentBlock
          title="Control with Your Eyes"
          copy="Navigate through the experience by holding your gaze on a button until the confirmation animation completes. Try it now using the button below."
          cta="Continue"
        />
      </div>
      <div className="embla-slide align">
        <ContentBlock
          title="Use Your Voice"
          copy={
            <span>
              You can also navigate using your voice.
              <br /> Try saying <strong>"Next"</strong> to continue to the next
              dialogue.
            </span>
          }
        />
      </div>
      <div className="embla-slide align">
        <ContentBlock
          title="Need Help?"
          copy={
            <span>
              If you need help at any time, simply gaze at the{" "}
              <strong>Help</strong> button in the top-right corner or say{" "}
              <strong>"Help"</strong>. Give it a try now.
            </span>
          }
        />
      </div>
      <div className="embla-slide align">
        <ContentBlock
          title="Introduction"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          cta="Begin Tests"
        />
      </div>
    </Carousel>
  );
};

export default Introduction;
