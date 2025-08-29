import type MarkdownIt from "markdown-it/index.js";

export default function tooltipPlugin(md: MarkdownIt) {
  md.inline.ruler.after('emphasis', 'tooltip', function(state, silent) {
    const start = state.pos;
    const max = state.posMax;

    // Look for [text]{tooltip}
    if (state.src.charCodeAt(start) !== 0x5B /* [ */) return false;

    const labelEnd = state.src.indexOf(']{', start);
    if (labelEnd < 0) return false;

    const tooltipEnd = state.src.indexOf('}', labelEnd + 2);
    if (tooltipEnd < 0) return false;

    if (!silent) {
      const text = state.src.slice(start + 1, labelEnd);
      const tooltip = state.src.slice(labelEnd + 2, tooltipEnd);

      const token = state.push('tooltip_open', 'span', 1);
      token.attrSet('data-tooltip', tooltip);
      token.attrSet('class', 'tooltip-trigger');

      state.push('text', '', 0).content = text;
      state.push('tooltip_close', 'span', -1);
    }

    state.pos = tooltipEnd + 1;
    return true;
  });
}
