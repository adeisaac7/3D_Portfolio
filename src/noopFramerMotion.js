import React from 'react'

// A tiny shim to neutralize framer-motion animation during dev/build.
// It exports a `motion` object whose properties (e.g., motion.div)
// are simple passthrough components rendering their children.

const passthrough = (props) => React.createElement('div', props, props.children)

const motion = new Proxy({}, { get: () => passthrough })

export { motion }
