const i=`:host {
  display: inline-block;
}

.t-icon {
  display: inline-block;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  fill: currentcolor;
}

.t-icon::before {
  font-family: unset;
}

.t-icon-loading {
  animation: t-spin 1s linear infinite;
}

@keyframes t-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.t-icon-loading {
  animation: t-spin 1s linear infinite;
}

.t-icon.t-size-s {
  font-size: 14px;
}

.t-icon.t-size-m {
  font-size: 16px;
}

.t-icon.t-size-l {
  font-size: 18px;
}`;export{i};
