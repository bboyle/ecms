/*
	*	File:		ecms_config.js
	*	Name:		Expandable/Collapsible Menu System
	*	Date:		2000-12-06

	*	Copyright:	(c) Ben Boyle 2000
	*	Author:		Ben Boyle
	*	Email:		bsboyle@optusnet.com.au

	*	Platform:	all javascript browsers

	Configuration file for dynamic expandable/collapsible menu.
	Remove the // from comments and adjust properties to suit.

	see instructions online:
	http://inspire.server101.com/scripts/ecms/


	Functions to control menu from HTML:
		ECMS_expand_all()		(expand entire menu)
		ECMS_collapse_all()		(collapse entire menu)
		ECMS_expand('name')		(expand named menu folder)
		ECMS_collapse('name')	(collapse named menu folder)
	note: to expand/collapse a named subfolder, its parent must be expanded

	CSS display configuration classes (class names can be customised):
		.bullet		(a menu link that does not contain child items)
		.collapsed	(a menu parent that is closed)
		.expanded	(a menu parent that is open)

	CSS platform dependant styles:
		IE 4/5, N6	(DIV.stylename)
		Netscape 4x	(LAYER.stylename)
		default		(LI.stylename)

	CSS Examples:
		DIV.bullet { font-weight: normal; }
		DIV.collapsed { font-weight: bold; }
		DIV.expanded { font-weight: bold; }
		LAYER.bullet { font-weight: normal; }
		LAYER.collapsed { font-weight: bold; }
		LAYER.expanded { font-weight: bold; }
		LI.bullet { font-weight: normal; list-style-type: disc; list-style-image: url(bullet.gif); }
		LI.expanded { font-weight: bold; list-style-type: circle; list-style-image: url(expanded.gif); margin-bottom: 0px; margin-left: 15px; margin-top: 0px; }

*/


/*
	menu classes
	- bullet (menu item)
	- collapsed (collapsed menu item which expands when clicked)
	- expanded (expanded menu item which collapses with clicked)
*/
ECMS_class_bullet = 'bullet';
ECMS_class_collapsed = 'collapsed';
ECMS_class_expanded = 'expanded';

/*
	menu images (not used by default system)
	- bullet (menu item)
	- collapsed (collapsed menu item which expands when clicked)
	- expanded (expanded menu item which collapses with clicked)
*/
ECMS_image_collapsed.src = '/js/ecms/collapsed.gif';
ECMS_image_expanded.src = '/js/ecms/expanded.gif';

/*
	menu images ALT text (not used by default system)
	- bullet (menu item)
	- collapsed (collapsed menu item which expands when clicked)
	- expanded (expanded menu item which collapses with clicked)
*/
ECMS_image_bullet.alt = '';
ECMS_image_collapsed.alt = 'Expand menu';
ECMS_image_expanded.alt = 'Collapse menu';

/*
	indent menu items (pixel measurement from left margin)
*/
ECMS_menu_indent = 10;

/*
	height of fully expanded menu for netscape (pixel measurement)
	this is to ensure enough space reserved for the menu
*/
//ECMS_menu_height = 250;

/*
	display link titles in status bar
	- if no title available, will use the name parameter
*/
ECMS_status_display = true;

/*
	repeat links on image/text
	- adds expand link on menus without their own links
	- adds link on bullet points
*/
ECMS_repeat_links = true;

/*
	collapse all other open menu branches when expanding a new branch
*/
ECMS_collapse_on_expand = true;

/*
	automatically expand when the mouse is over a menu element
	delay time is in milliseconds (1000ms is 1 second)
	only works for menu folders which have a url specified
*/
ECMS_auto_expand = true;
ECMS_auto_expand_delay = 750;


/*
BUILD THE MENU
ECMS_add_item(level, name, url, target);
	- level:		level of the item (0 is a top level menu choice, 1 under that, 2 under that)
	- name:			text displayed the item (HTML markup allowed)
	- url:			link for this item
	- target:		target frame for link
	- expanded:		true/false (initial expanded?  false is default)
*/

// preload images
if (document.image) {
	var bullet1 = new Image(9, 9);
	bullet1.src = '/js/ecms/ol/1.gif';
	var bullet2 = new Image(9, 9);
	bullet2.src = '/js/ecms/ol/2.gif';
	var bullet3 = new Image(9, 9);
	bullet3.src = '/js/ecms/ol/3.gif';
}

// example menu
ECMS_image_bullet.src = '/js/ecms/ol/1.gif';
ECMS_image_bullet.alt = '1.';
ECMS_add_item(0, 'These scripts are available here in the Javascript library');
ECMS_add_item(1, 'Expandible/Collapsible Menu System', './');

ECMS_image_bullet.src = '/js/ecms/ol/2.gif';
ECMS_image_bullet.alt = '2.';
ECMS_add_item(1, 'Text Scroller', '../scroll/');

ECMS_image_bullet.src = '/js/ecms/ol/3.gif';
ECMS_image_bullet.alt = '3.';
ECMS_add_item(1, 'Popup Menu System', '../m/');

ECMS_end_menu();
