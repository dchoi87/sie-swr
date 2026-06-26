import { Carousel, ContentBlock } from "@/components/molecules";

const Introduction = ({}) => {
  return (
    <Carousel>
      <div className="embla-slide">
        <ContentBlock
          title="Control with Your Eyes"
          copy="Navigate through the experience by holding your gaze on a button until the confirmation animation completes. Try it now using the button below."
        />
      </div>
      <div className="embla-slide">
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
      <div className="embla-slide">
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
      <div className="embla-slide">
        <ContentBlock
          title="Introduction"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </Carousel>
  );
};

export default Introduction;
