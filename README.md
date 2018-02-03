# Table of Contents script

I wrote this to generate a table of contents for my blog posts (using the [Ghost platform](https://ghost.org/)), but it should work for any HTML page.

Just pass the entire `document` (DOM) to it, and it'll parse out the header tags and generate markup for a table of contents. Call it from wherever you'd like, and then write out the results to the page.

## Usage

For example, here's what I used in `sidebar.hbs` in Ghost.

```javascript
<script type="text/javascript">
        document.write(getTocMarkup(document));
</script>
```

## Notes

There's a few comments in the code, where you can make adjustments to suit your needs.

If you want to read more, or see what it should look like when rendered, [I wrote about it here](https://grantwinney.com/creating-a-table-of-contents-for-your-blog/).
