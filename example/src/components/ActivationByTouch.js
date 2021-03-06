import React from 'react';
import ReactCursorPosition, { INTERACTIONS } from '../pkg-lnk/ReactCursorPosition';
import PositionLabel from './PositionLabel';

export default () => (
    <ReactCursorPosition
        className="example__target"
        activationInteractionTouch={INTERACTIONS.TOUCH}
    >
        <PositionLabel />
        <div className="example__instructions">
            Touch and Drag
        </div>
    </ReactCursorPosition>
);

