# Logic Flowchart Generator

### Description.
HTML and Javascript routines to draw, preview and save a logic flowchart coded in the SVG XML language standard.  The project was developed to sample coding SVG with Javascript: there are far better open source software drawing packages.
	
**For the User**  
Allows the user to generate standard logic flowchart symbols, connectors and flow lines. The user has the option to preview the finished product in a separate tab/window and save the SVG code that created the image to a local file for later use.  

**For the Developer**:  
The code contains numerous examples -  

1. creating SVG using javascript such as
	1. svg rect;
	2. svg polygon;
	3. svg circle;
	4. svg point;
	5. svg text;
	6. svg marker;
	7. svg defs;
	8. svg g (group);
	9. svg line;
2. The manipulation of the SVG nodes with javascript such as:  
	1. The creation of the specific svg node;
	2. Adding attributes to the svg node;
	3. Adding Event Listeners to the svg code;
	4. Identifying points on the svg graph;
	5. User interaction with the svg graphs.  

The source file *XMLFormat.js* is used to format, 'Pretty Print' style, conforming XML passed to it.  
The resulting SVG code that is rendered in a new 'open'ed window, during the 'Preview' process, can be saved at the user's discretion.  

The code is heavily annotated: maybe too much!
		
## Table of Contents.  

1. Requirements
2. Installation
3. Usage
4. Files
5. Credits
6. License
7. Useful Resources

## Requirements  

The code was developed using the latest Firefox browser, other browsers may require work arounds:  
  
1. Chrome does render but there seems to be a security issue that does not allow a window.open to save its contents.
2. Internet Explorer does not recognise node.remove() et. al.;
3. Edge denies access for window.open with blob.  

however, *all* browsers seem to properly render the conforming generated SVG code that is saved as a .svg file, in 'Preview' mode, using Firefox.

## Installation.
There are two files required for the project: *FlowchartGenerator.html* and *XMLFormat.js*.
	Store them together in any folder of your choosing.
	
## Usage.  
See the sample *UserInterface.png* and *Preview.svg* files.  

A 5 by 7 grid is displayed along with some menu items.  

When you hover over a grid the background changes to a darker shade and the cell Column/Row values are displayed in the top left corner of the grid.  

To *Add* logic chart symbols to the grid, except for 'flow lines' - see step 6 : 
 
1. click on a grid: the Column/Row fields are updated with the values of the selected cell;
2. select a graph from the drop down 'Graph' menu;
3. fill in any information, on the menu line, you require. Some information is filled in for you;
4. click on the 'Draw' button;
5. repeat steps 1 - 4 as desired.
6. To use the 'flow lines' graph option:
	1. click on a grid that contains a graph. This will be your 'From' symbol;
	2. holding the shift key down, click on the desired 'To' graph grid: the 'To' Column/Row fields are updated with the values of the selected cell;
	3. fill in any information, on the menu line, you require. Some information is filled in for you.
	4. click on the 'Draw' button;
	5. repeat steps 1 - 4 as desired.  

To *Delete* symbols:  

1. hover over the symbol until its border enlarges;
2. then, hold the alt key down and click on the enlarged symbol  

All text, including the comparison characters, belong to the symbol and therefore are deleted when the symbol is deleted. Also, any flow lines drawn to or from a symbol are deleted when the symbol is deleted. To delete a single flow line, hover over it until the flow line enlarges: delete in the manner described above.  

To *Modify* a symbol, or its contents:  

1. select the grid containing a symbol: the symbols information is displayed;
2. select a new graph - the old graph and it's flow lines will be deleted - or, change the data for the existing graph: the existing graph will be preserved and updated;
3. click on the 'Draw' button.  

To *Move* a symbol:  

- Delete the existing symbol and add the new symbol in the required grid as described above.  
	
The menu line:  

1. 'Graph' drop down list allows you to select the symbol you wish to paint in the selected grid, along with text and, in the case of a decision graph, any comparison characters that are present.
	1. Start/Stop draws an elliptical graph and is used to indicate the beginning/end of your logic.
	2. 'Decision' draws a diamond shaped graph used to indicate a possible fork in the logic path.
	3. 'Process' draws a rectangular graph to indicate some process to be executed.
	4. 'Input/Output' draws a parallelogram to indicate an external device capable of allowing for the input or output of user supplied data.
	5. 'Connectors' draws small circles that are used to connect symbols elsewhere (non-adjacent) on the current 'page'.
	6. 'Off Page Connector' draws a 5 sided symbol to indicate that logic continues on 'another page'.
	7. 'Pivot Point' draws a small filled, unobtrusive circle or point to allow two connectors to continue path flow, without resorting to diagonal lines between other graphs.
	8. 'Flow Lines' draws lines that show the direction of the path of logic between symbols.
2. 'Column and Row' are a non-editable fields that are filled in by the process with information calculated from the currently selected grid. For flow lines they represent the 'From' symbol.
3. 'Text' are editable fields that the user can use to display information within a symbol. There are three lines and they represent the order and location within the symbol where this information will be displayed.
4. 'Right/Bottom/Left Symbol' is displayed as menu items when the 'Decision' graph is selected. They allow the user to attach comparison symbols around the decision symbol, as required.
5. 'To Column/Row' is displayed as menu items when the 'Flow Lines' graph has been selected. They are filled when the user shift clicks on a grid.
6. 'Draw' draws the currently selected symbol and redraws all symbols currently active in this session.
7. 'Display Grid' button toggles the hashed grid outline on and off.
8. 'Preview' button opens a new tab displaying your flowchart with the rendered SVG code. You can *save* this pure SVG code by using your browser's 'file/save as' menu - the 'file/save as' currently only works in Firefox due to differences in implementation.  

Caution:  

- This is the beta version of the project.
- The process does not contain extensive error catching code.
- Be sure that you have clicked the required grid by monitoring the From/To Column/Row fields.

## Files.  
1. README.md	- This file.
2. FlowchartGenerator.html - The main file: open with the Firefox browser.
3. XMLFormat.js - A helper file: formats the generated SVG code to 'pretty print'.
4. Preview.svg - A sample SVG file: open with a browser of your choosing.
5. UserInterface.png - A snapshot of a flowchart in progress: open with your favourite browser.
6. ToDoList.txt - A "to do" list for developers, should they feel so inclined.
7. LICENSE.txt - A text file describing the MIT open software license to which this project adheres.
	
## Credits.
- Admittedly, all software is collaborative. As far as I know, all software herein is open - source. 
- I have endeavoured to credit the authour whenever I adapted their code for use here.
- The works and efforts by the documenters for Mozilla.
- The awesome professionals who provide top quality open source software.
- GITHUB, an unending well of knowledge that also provides the means for collaborative development.
	
## Useful Resources.
- The World Wide Web and search engines
- The resources laid out for us by fellow coders, especially StackOverflow.
- The coders who tirelessly and selflessly provide their efforts and insights to us without material benefit or compensation, other than the satisfaction of knowing they helped out another struggling coder.
- Using SVG with CSS3 & HTML5 by Bellamy-Royds/Cagle/Story published by O'Reilly.
- MDN Web Docs.
- Notepad++
- GITHUB