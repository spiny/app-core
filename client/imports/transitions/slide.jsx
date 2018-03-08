import React, { Component } from 'react';

import Transition from 'react-transition-group/Transition';


const duration = 500;

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '0px'
  },

  default: {
    position: 'absolute',
    width: '100%',
    top: '0',
    left: '0',
    opacity: 1,
  },

  left: {
    entering: {
      transition: `visibility 0s, left ${duration}ms ease-in-out, opacity ${duration}ms linear`,
    },
    entered: {
    },
    exited: {
      left: '-100%',
      opacity: 0,
      visibility: 'hidden',
    },
    exiting: {
      transition: `visibility 0s linear ${duration}ms, left ${duration}ms ease-in-out, opacity ${duration}ms linear`,
      left: '-100%',
      opacity: 0,
      visibility: 'hidden',
    }
  },

  right: {
    entering: {
      transition: `visibility 0s, left ${duration}ms ease-in-out, opacity ${duration}ms linear`,
    },
    entered: {
    },
    exited: {
      left: '100%',
      opacity: 0,
      visibility: 'hidden',
    },
    exiting: {
      transition: `visibility 0s linear ${duration}ms, left ${duration}ms ease-in-out, opacity ${duration}ms linear`,
      left: '100%',
      opacity: 0,
      visibility: 'hidden',
    }
  }
}


export const SlideLeft = ({ in: inProp, children }) => (
  <div style={ styles.wrapper }>
    <Transition in={ !!inProp } exited={ !inProp } timeout={ duration }>
      {(state) => (
        <div style={ {
          ...styles.default,
          ...styles.left[state]
        } }>
          { children }
        </div>
      )}
    </Transition>
  </div>
)


export const SlideRight = ({ in: inProp, children }) => (
  <div style={ styles.wrapper }>
    <Transition in={ !!inProp } exited={ !inProp } timeout={ duration }>
      {(state) => (
        <div style={ {
          ...styles.default,
          ...styles.right[state]
        } }>
          { children }
        </div>
      )}
    </Transition>
  </div>
)
