<script setup lang="ts">
// import hljs from 'highlight.js'

const props = defineProps<{
  title: string
}>()

const name = shallowRef()

const md = () => import(`../../docs/essays/${props.title}.md`)
md().then((res) => {
  name.value = res.default
})
</script>

<template>
  <component
    :is="name"
    v-highlight
  />
</template>

<!-- <style lang="postcss">
.markdown-here-wrapper,
.markdown-body {
  font-size: 16px;
  line-height: 1.8em;
  letter-spacing: 0.1em;

  pre, code {
    font-size: 14px;
    font-family: Roboto, 'Courier New', Consolas, Inconsolata, Courier, monospace;
    margin: auto 5px;
  }

  code {
    white-space: pre-wrap;
    border-radius: 2px;
    display: inline;
  }

  pre {
    font-size: 15px;
    line-height: 1.4em;
    display: block !important;
  }

  pre code {
    white-space: pre;
    overflow: auto;
    border-radius: 3px;
    padding: 1px 1px;
    display: block !important;
  }

  strong, b{
    color: #BF360C;
  }

  em, i {
    color: #009688;
  }

  hr {
    border: 1px solid #BF360C;
    margin: 1.5em auto;
  }

  p {
    margin: 1.5em 5px !important;
  }

  table, pre, dl, blockquote, q, ul, ol {
    margin: 10px 5px;
  }

  ul, ol {
    padding-left: 15px;
  }

  li {
    margin: 10px;
  }

  li p {
    margin: 10px 0 !important;
  }

  ul ul, ul ol, ol ul, ol ol {
    margin: 0;
    padding-left: 10px;
  }

  ul {
    list-style-type: circle;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-size: 1em;
    font-weight: bold;
    font-style: italic;
  }

  dl dd {
    margin: 0 0 10px;
    padding: 0 10px;
  }

  blockquote, q {
    border-left: 2px solid #009688;
    padding: 0 10px;
    color: #777;
    quotes: none;
    margin-left: 1em;
  }

  blockquote::before, blockquote::after, q::before, q::after {
    content: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 20px 0 10px;
    padding: 0;
    font-style: bold !important;
    color: #009688 !important;
    text-align: center !important;
    margin: 1.5em 5px !important;
    padding: 0.5em 1em !important;
  }

  h1 {
    font-size: 26px !important;
    border-bottom: 1px solid #ddd !important;
  }

  h2 {
    font-size: 20px !important;
    border-bottom: 1px solid #eee !important;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  table {
    padding: 0;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1em;
    font: inherit;
    border: 0;
    margin: 0 auto;
  }

  tbody {
    margin: 0;
    padding: 0;
    border: 0;
  }

  table tr {
    border: 0;
    border-top: 1px solid #CCC;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #F8F8F8;
  }

  table tr th, table tr td {
    font-size: 16px;
    border: 1px solid #CCC;
    margin: 0;
    padding: 5px 10px;
  }

  table tr th {
    font-weight: bold;
    color: #eee;
    border: 1px solid #009688;
    background-color: #009688;
  }
}
</style> -->

<style lang="postcss">
.markdown-body {

  h1 {
    font-size: 2.2em;
    font-weight: 700;
    line-height: 1.1;
    padding-top: 16px;
    margin-bottom: 4px;
  }
  h2, h3, h4, h5, h6 {
    line-height: 1.5em;
    margin-top: 2.2em;
    margin-bottom: 4px;
  }
  h2 {
    font-size: 1.4em;
    margin: 40px 10px 20px 0;
    padding-left: 9px;
    border-left: 6px solid #ff7e79;
    font-weight: 700;
    line-height: 1.4;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2em;
    line-height: 1.4;
    margin: 10px 0 5px;
    padding-top: 10px;
  }
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.1em;
    line-height: 1.4;
    margin: 10px 0 5px;
    padding-top: 10px
  }
  h5, h6 {
    font-size: .9em;
  }
  h5 {
    font-weight: bold;
    text-transform: uppercase;
  }
  h6 {
    font-weight: normal;
    color: #AAA;
  }
  img {
    width: 100%;
    border-radius: 5px;
    display: block;
    margin-bottom: 15px;
    height: auto;
  }
  dl, ol, ul {
    margin-top: 12px;
    margin-bottom: 20px;
    padding-left: 5%;
    line-height: 1.8;
  }
  p {
    margin: 0 0 20px;
    padding: 0;
    line-height: 1.8;
  }
  a {
    color: #f22f27;
    text-decoration: none;
  }
  a:hover {
    color: #f55852;
    text-decoration: underline;
  }
  a:focus {
    outline-offset: -2px;
  }
  blockquote {
    font-size: 1em;
    font-style: normal;
    padding: 30px 38px;
    margin: 0 0 15px;
    position: relative;
    line-height: 1.8;
    text-indent: 0;
    border: none;
    color: #888;
  }
  blockquote:before {
    content: "“";
    left: 12px;
    top: 0;
    color: #E0E0E0;
    font-size: 4em;
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
    position: absolute;
  }
  blockquote:after {
    content: "”";
    right: 12px;
    bottom: -26px;
    color: #E0E0E0;
    font-size: 4em;
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
    position: absolute;
    bottom: -31px;
  }
  strong, dfn {
    font-weight: 700;
  }
  em, dfn {
    font-style: italic;
    font-weight: 400;
  }
  del {
    text-decoration: line-through;
  }
  /*code {font-size:90%;}*/

  /*pre {text-align:left; overflow-x: scroll; color: #257fa0; background: #f6f6f6; padding: 10pt 15pt; border-radius: 3px; border: solid 1px #e2e2e2;}*/

  pre {
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857;
    word-break: break-all;
    word-wrap: break-word;
    border-radius: 4px;
    white-space: pre-wrap;
    display: block;
    background: #f8f8f8;
    padding: 10px 20px;
    border: none;
    margin-bottom: 25px;
    color: #666;
    font-family: Courier, sans-serif;
  }
  code {
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    padding: 2px 4px;
    font-size: 90%;
  }
  p>code {
    color: #c7264e;
    background-color: #f9f2f4;
    font-size: .95em;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
  }
  figure {
    margin: 1em 0;
  }
  figcaption {
    font-size: 0.75em;
    padding: 0.5em 2em;
    margin-bottom: 2em;
  }
  figure img {
    margin-bottom: 0px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  ol p, ul p {
    margin-bottom: 0px;
  }
  li {
    margin-bottom: 0.75em;
    margin-top: 0.75em;
  }
  ol#footnotes {
    font-size: 0.95em;
    padding-top: 1em;
    margin-top: 1em;
    margin-left: 0;
    border-top: 1px solid #eaeaea;
    counter-reset: footer-counter;
    list-style: none;
    color: #555;
    padding-left: 5%;
    margin: 20px 0;
  }
  ol#footnotes li {
    margin-bottom: 10px;
    margin-left: 16px;
    font-weight: 400;
    line-height: 2;
    list-style-type: none;
  }
  ol#footnotes li:before {
    content: counter(footer-counter) ". ";
    counter-increment: footer-counter;
    font-weight: 800;
    font-size: .95em;
  }
  @keyframes highfade {
    0% {
      background-color: none;
    }
    20% {
      background-color: yellow;
    }
    100% {
      background-color: none;
    }
  }
  @-webkit-keyframes highfade {
    0% {
      background-color: none;
    }
    20% {
      background-color: yellow;
    }
    100% {
      background-color: none;
    }
  }
  a:target, ol#footnotes li:target, sup a:target {
    animation-name: highfade;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    -webkit-animation-name: highfade;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
  }
  a:target {
    border: 0;
    outline: 0;
  }
  /* animation-iteration-count: 1; */
  /* -webkit-animation-timing-function: ease-in-out; */

  a:target {
    border: 0;
    outline: 0;
  }
  /* tion-iteration-count: 1; */
  /* -webkit-animation-timing-function: ease-in-out; */

  a:target {
    border: 0;
    outline: 0;
  }
}
</style>

<route lang="yaml">
name: essays-title
  </route>
