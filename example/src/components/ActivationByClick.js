import React from 'react';
import ReactCursorPosition, { INTERACTIONS } from '../pkg-lnk/ReactCursorPosition';
import PositionLabel from './PositionLabel';

export default () => (
    <ReactCursorPosition
        className="example__target"
        activationInteractionMouse={INTERACTIONS.CLICK}
    >
        <PositionLabel />
        <div className="example__instructions">
            Click to activate. Hover. Then click again to deactivate.
        </div>
    </ReactCursorPosition>
);

