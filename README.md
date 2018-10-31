Logic Flowchart Generator

Description.
	HTML and Javascript routines to draw, preview and save a logic flowchart coded in the SVG XML language standard.
	The project was developed to sample coding SVG with javascript: there are far better open source software drawing packages.
	
	For the user: 
		Allows the user to generate standard logic flowchart symbols, connectors and flow lines. 
		The user has the option to preview the finished product in a separate tab/window and 
		save the SVG code that created the image to a local file for later use.
	For the developer:
		The code contains numerous examples:
			i) creating SVG using javascript such as
				a) svg rect;
				b) svg polygon;
				c) svg circle;
				d) svg point;
				e) svg text;
				f) svg marker;
				g) svg defs;
				h) svg g (group);
				i) svg line.
			ii) The manipulation of the SVG nodes with javascript such as:
				a) The creation of the specific svg node;
				b) Adding attributes to the svg node;
				c) Adding Event Listners to the svg code;
				d) Identifying points on the svg graph;
				e) User interaction with the svg graphs;
		The source file XMLFormat.js is used to format, Pretty Print style, conforming XML passed to it. 
		The resulting SVG code that is rendered in a new 'open'ed window, during the 'Preview' process, can be saved
		at the user's discretion.
		The code is heavily annotated: maybe too much!
		
Table of Contents.
	i)		Requirements
	ii)	Installation
	iii)	Usage
	iv)	Files
	v)		Credits
	vi)	License
	vii)	Useful Resources

Requirements.
	The code was developed using the latest Firefox browser, other browsers may require work arounds:
		i) 	Chrome does render but there seems to be a security block that does not allow a window.open to save its contents.
		ii)	Internet Explorer does not recognise node.remove() et. al.;
		iii)	Edge denies access for window.open with blob.
	however, All browsers seem to properly render the conforming generated SVG code that is saved using Firefox.

Installation.
	There are two files required for the project: FlowchartGenerator.html and XMLFormat.js.
	Store them together in any folder of your choosing.
	
Usage.
	See the sample UserInterface.png and Preview.svg files.
	A 5 by 7 grid is displayed along with some menu items.
	When you hover over a grid the background changes to a darker shade and the cell Column/Row values are 
		displayed in the top left corner of the grid.;
	To add logic chart symbols to the grid, except for 'flow lines' - see step (6):
		1) click on a grid: the Column/Row fields are updated with the values of the selected cell;
		2) select a graph from the drop down 'Graph' menu;
		3) fill in any information, on the menu line, you require or is required. Some information is filled in for you;
		4) click on the 'Draw' button;
		5) repeat steps 1 - 4 as desired.		
		6) To use the 'flow lines' graph option:
			i) click on a grid that contains a graph. This will be your 'From' symbol;
			ii) holding the shift key down, click on the desired 'To' graph grid: the 'To' Column/Row fields are updated with 
				the values of the selected cell;
			iii) fill in any information, on the menu line, you require or is required. Some information is filled in for you.
			iv) click on the 'Draw' button;
			v) repeat steps 1 - 4 as desired.
	To delete symbols:
		1) hover over the symbol until it enlarges;
		2) thenm hold the alt key down and click on the enlarged symbol
		All text, including the comparison characters belong to the symbol and therefore are deleted when the symbol is deleted.
		Also, any flow lines drawn to or from a symbol are deleted when the symbol is deleted.
		To delete a single flow line, hover over it until the flow line enlarges: delete in the manner described above.
	To modify a symbol, or it's contents:
		1) select the grid containing a symbol. The symbols information is displayed;
		2) select a new graph - the old graph and it's flow lines will be deleted - or, change the data for the existing graph -
			the existing graph will be preserved and updated;
		3) click on the 'Draw' button.
	To move a symbol:
		Delete the existing symbol and Add the new symbol in the required grid as described above.
	
	The Menu:
		1) 'Graph' drop down list allows you to select the symbol you wish to paint in the selected grid, along with text and,
			in the case of a decision graph, any comparison characters that are present.
			a) Stort/Stop draws an elliptical graph and is used to indicate the beginning/end of your logic.
			b) 'Decision' draws a diamond shaped graph used to indicate a possible fork in the logic path.
			c) 'Process' draws a rectangular graph to indicate some process to be executed.
			d) 'Input/Output' draws a parallelogram to indicate an external device capable of allowing for
				the input or output of user supplied data.
			e) 'Connectors' draws small circles that are used to connect symbols elsewhere (non-adjacent) on the current 'page'
			f) 'Off Page Connector' draws a 5 sided symbol to indicate that logic continues on 'another page'.
			g) 'Pivot Point' draws a small filled, unobtrusive circle or point to allow two connectors to continue path flow,
				without resorting to diagonal lines between other graphs.
			h) 'Flow Lines' draws lines that show the direction of the path of logic between symbols.
		2) 'Column and Row' are a non-editable fields that are filled in by the process with information calculated from the currently selected grid.
			For flow lines they represent the 'From' symbol.
		3) 'Text' are editable fields that the user can use to display information within a symbol. There are three lines and they 
			represent the order and location within the symbol where this information will be displayed.
		4) 'Right/Bottom/Left Symbol' is displayed as menu items when the 'Decision' graph is selected. They allow the user to attach
			comparison symbols around the decision symbol, as required.
		5) 'To Column/Row' is displayed as menu items when the 'Flow Lines' graph has been selected. They are filled when the user
			shift clicks on a grid.
		6) 'Draw' draws the currently selected symbol and redraws all symbols currently active in this session.
		7) 'Display Grid' button toggles the hashed grid outline on and off.
		8) 'Preview' button opens a new tab displaying your flowchart with the rendered SVG code.
			You can save this pure SVG code by using your browser's 'file/save as' menu - 
			the 'file/save as' currently only works in Firefox due to differences in implementation.
		
	Caution:
		1) This is the beta version of the project.
		1) The process does not contain extensive error catching code.
		2) Be sure that you have clicked the required grid by monitoring the From/To Column/Row fields.

Files.
	README.md	- This file.
	FlowchartGenerator.html - The main file: open with the Firefox browser.
	XMLFormat.js - A helper file: formats the generated SVG code to 'pretty print'.
	Preview.svg - A sample SVG file: open with a browser of your choosing.
	UserInterface.png - A snapshot of a flowchart in progress: open with your favourite browser.
	ToDoList.txt - A "to do" list for developers, should they feel so inclined.
	LICENSE.txt - A text file describing the MIT open software license to which this project adheres.
	
Credits.
	Admittedly, all software is collaborative. As far as I know, all software herein is open source. 
	I have endeavoured to credit the authour whenever I adapted their code for use here.
	The works and efforts by the documenters for Mozilla.
	The awesome professionals who provide top quality open source software.
	GITHUB, an unending well of knowledge that also provides the means for collaborative development.
	
Useful Resources.
	1) The World Wide Web and search engines
	2) The resources laid out for us by fellow coders, especially StackOverflow.
	3) The coders who tirelessly and selflessly provide their efforts and insights to us without material benefit or compensation, other
		than the satisfaction of knowing they helped out another struggling coder.
	4) Using SVG with CSS3 & HTML5 by Bellamy-Royds/Cagle/Story published by O'Reilly.
	5) MDN Web Docs.
	6) Notepad++
	7) GITHUB.