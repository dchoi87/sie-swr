import { Dialogue, ContentBlock } from "@/components/molecules";

const Introduction = () => {
  return (
    <Dialogue hideHelp={[0, 1, 3]} hideNav={[0, 3]}>
      <div className="embla-slide align">
        <ContentBlock
          title="Navigate with Your Eyes"
          copy="Hold your gaze until the animation completes. Try it now using the button below."
          cta="Continue"
        />
      </div>
      <div className="embla-slide align">
        <ContentBlock
          title="Use Your Voice"
          copy={
            <span>
              You can also navigate using your voice. Try saying <strong>"Next"</strong> to continue
              to the next slide.
            </span>
          }
        />
      </div>
      <div className="embla-slide align">
        <ContentBlock
          title="Need Help?"
          copy={
            <span>
              If you need help at any time, simply gaze at the <strong>Help</strong> button in the
              top-right corner or say <strong>"Help"</strong>. Give it a try now.
            </span>
          }
        />
      </div>
      <div className="embla-slide align">
        <ContentBlock
          title="Introduction"
          copy='You are about to take tests that measures your eye function. Remember, you can say "help" at any time.'
          cta="Begin Tests"
        />
      </div>
    </Dialogue>
  );
};

export default Introduction;
