
export const buttonVariants = {
  default: ({ iconEl, textEl }) => (
    <button>
      {iconEl}
      {textEl}
    </button>
  ),

  iconFocus: ({ iconEl, textEl, isIcon }) => (
    <button>
      {isIcon && <div className="iconWrapper">
        {iconEl}
      </div>}
      {textEl}
    </button>
  ),

  roundedPill: ({ iconEl, textEl }) => (
    <button>
      {iconEl}
      {textEl}
    </button>
  ),

  outlineStyle: ({ iconEl, textEl }) => (
    <button>
      {iconEl}
      {textEl}
    </button>
  ),

  floatingAction: ({ iconEl }) => (
    <button>
      {iconEl}
    </button>
  ),

  interactiveHover: ({ iconEl, textEl }) => (
    <button>
      <span className="overlay"></span>
      {iconEl}
      {textEl}
    </button>
  ),

  retro: ({ iconEl, textEl }) => (
    <button>
      {iconEl}
      {textEl}
    </button>
  ),

  brutalist: ({ iconEl, textEl }) => (
    <button>
      {iconEl}
      {textEl}
    </button>
  ),

  effect: ({ iconEl, textEl }) => (
    <button>
      {iconEl}
      {textEl}
    </button>
  ),

  textHeavy: ({ iconEl, textEl }) => (
    <button>
      {iconEl}
      {textEl}
    </button>
  ),
};
