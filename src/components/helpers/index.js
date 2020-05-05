function toTitleCase(label) {
  return label
    .split("")
    .map((s, i) => (i === 0 ? s.toUpperCase() : s.toLowerCase()))
    .join("")
}

function isIndex (label) {
  return label.toLowerCase() === "index"
}

function createNavPathFromLabel(label) {
  return isIndex(label) ? "/" : `/${label.toLowerCase()}`
}

function createNavLabelFromLabel(label) {
  return isIndex(label) ? "Home" : toTitleCase(label)
}

export { createNavLabelFromLabel, createNavPathFromLabel }
