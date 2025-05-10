import { PropTypes } from 'prop-types';
import './productVideoLoop.css';

export default function ProductVideoLoop({ title }) {
  const playbackRate = 0.55;
  ProductVideoLoop.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="videoContainer">
      <video
        className="video"
        autoPlay
        loop
        muted
        playsInline
        src={`${process.env.PUBLIC_URL}/videos/gallery-loop-videos/${title}.webm`}
        onLoadedMetadata={(e) => {
          e.target.playbackRate = playbackRate || 1;
        }}
      />

    </div>
  );
}
