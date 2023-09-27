import React from "react";
import "./Video.css";

function VideoWithDescription() {
  return (
    <div className="video-with-description">
      <div className="video-placeholder">
        {/* You can embed your video here */}
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/MmAFDsY0aRA?si=7XIvB5j01ASA8_XW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="description">
        <p>
          Clouds, those enchanting formations of water droplets or ice crystals
          suspended in Earth's atmosphere, are ethereal wonders that grace our
          skies. These celestial canvases, ranging from delicate wisps to
          towering giants, captivate our senses and contribute profoundly to
          Earth's climate and weather systems. Clouds materialize as the result
          of a mesmerizing meteorological dance, where moisture and temperature
          intertwine. When moist air rises and cools, it reaches a saturation
          point, causing water vapor to condense around tiny particles known as
          cloud condensation nuclei. This magical transformation births the
          clouds we gaze upon, each type offering a unique glimpse into
          atmospheric conditions. From the fluffy, cotton-like cumulus clouds to
          the ominous, thunderstorm-inducing cumulonimbus formations, clouds
          paint the sky with their ever-changing hues. They are not static
          entities but dynamic storytellers, shifting, growing, and merging as
          the atmosphere evolves. More than just mesmerizing phenomena, clouds
          are vital to our planet's well-being. They regulate temperatures by
          reflecting sunlight during the day and trapping heat at night. They
          also play a crucial role in the water cycle, releasing moisture as
          rain or snow, nourishing the land below. In conclusion, clouds are not
          merely adornments to the sky; they are the result of a complex
          interplay of nature's elements. Their diversity and transient beauty
          serve as constant reminders of the intricacies of Earth's natural
          world, making them both captivating and indispensable components of
          our daily lives.
        </p>
      </div>
    </div>
  );
}

export default VideoWithDescription;
