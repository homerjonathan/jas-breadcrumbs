<!--
```
<custom-element-demo>
<template>
    <link rel="import" href="jas-breadcrumbs.html">
    <script>
        document.addEventListener("DOMContentLoaded", function(event) {
          var breadCrumbMenu = [];
          breadCrumbMenu.push({text: "Main", id: "main"});
          breadCrumbMenu.push({text: "Second", id: "second"});
          breadCrumbMenu.push({text: "Third", id: "third"});
          JasBreadcrumbs.hook.setMenu(breadCrumbMenu);
        });
    </script>
</template>
</custom-element-demo>
```
-->

# \<jas-breadcrumbs\>

Simple Breadcrumbs Menu with Help Icon at the right side of the Page.  A Polymer 2.0 Component Only.

## Using the Component

```html

  <link rel="import" href="../bower_components/jas-breadcrumbs/jas-breadcrumbs.html">
  <jas-breadcrumbs id="breadcrumbs" selected="{{page}}"></jas-breadcrumbs>
  
```
This will create a menu.  When the item is select the 'id' above is set to the attribute and also a message is fired.  You can use your most prefered method of processing the event.

You set the breadcrumbs by sending an array in this example format below.  It uses text for what appears on the menu whilst the id is what is outputted when clicked.

```javascript
 var breadCrumbMenu = [];
          breadCrumbMenu.push({text: "Main", id: "main"});
          breadCrumbMenu.push({text: "Second", id: "second"});
          breadCrumbMenu.push({text: "Third", id: "third"});
          this.$.breadcrumbs.setMenu(breadCrumbMenu);

```

## Setting Colours

This component supports

* **--app-primary-color** For the Help Icon Colour
* **--breadcrumb-highlight** Colour of Link when the Mouse Hovers over the Breadcrumb Option
* **--breadcrumb-color1**  Normal Colour of Breadcrumb Text

## Events

There are two ways.  The first example below.  So you can trap the output in the Polymer way.

```html
  <jas-breadcrumbs id="breadcrumbs" selected="{{page}}"></jas-breadcrumbs>
  
```

Or you can trap the fired dispatch event and you can use it to change the page.  Enter this into your script to trap the message.

```javascript
    document.addEventListener("page_change", function(e) {
        console.log("Event: Page Change Requested - ", e.detail.page);
        // Do Your Page Change Stuff Here
    });
```

When the help button is pressed it sets the attribute selected to "help_page" but also dispatches an event message of "page_help".

```javascript
    document.addEventListener("page_help", function(e) {
        console.log("Help Page Requested");
        // Do Your Help Page Stuff Here
    });
```

## Hooking into the Component

It also links itself to its base class.  So the last instance will overwrite the value, but normally you would only have one of these anyhow. This is useful "other" way of talking to the component. If there is a neater way let me know!

```javascript

  JasBreadcrumbs.hook 
  
```
