import React from 'react';
import { isConditionalExpression } from 'typescript';

export interface EventHandlerProps {
    onClick: (e: React.MouseEvent) => void
  }
  
  export function EventHandler({ onClick }: EventHandlerProps) {
    // handle focus events in a separate function
    function onFocus(e: React.FocusEvent) {
      console.log('Focused!', e.currentTarget)
    }
  
    return (
      <button
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={e => {       }}
    >
        Click me!
        <h1>Загляни в консоль</h1> 
      </button>
    )
  }

  export default EventHandler;