function fncXMLFormat(strXMLString)
{

	// Formats conforming XML strings (Pretty Print style): indentation and new lines are inserted for easier readability.
	// strXMLString: is a conforming XML string
	// returns a formatted string.
	//	Notes:
	// 	Text elements are not formatted: the opening tags, the user data, and closing tags are left as is.	
	// 	Firefox preserves white space within a text element's textContent, if specified in an xml header, while edge and chrome do not seem to.
	// 	This code was developed using Firefox Nightly 65.0a1 (2018-10-25) (64-bit) and later.
	//
	// Wayne M. Ayotte
	// Web Developers International: webdevint.com: projects/the usual marker/webdevint.com
	// November, 2018.

	// criteria for our string matches
	var regexReg4 = /^<\/\w{1,}/;	// match closing tag
	var arr_strMatch4 = null;
	var regexReg2 = />/;				// match first '>' marker
	var arr_strMatch2 = null;
	var regexReg3 = /\/\s*>$/;		// match end '/possible_whitespace>' self closing tag marker
	var regexReg6 = /</;				// match first '<' marker
	var arr_strMatch6 = null;
	
	var arrNodes = [];	// array pointing to objects that describe our captured nodes.
	var intIndent = 0;	// holds the number of indents required for individual nodes for formatting purposes
	var intNodeEndingIndex = 0;	// the index at the end of the current substring conforming to a node: used to set the start point for the search into the XML string at the next iteration.
	var strNode = '';		// the node string currently being examined.
	var strLine = ''		// the line currently being built.
	var objNode = null;	// an object with the properties 1) 'node': the complete string for a captured node; 'indent': the number of indents (spaces) to prefix for this node (line), if any.
	var boolNotDone = true;	// loop control
	
	var strCurrStr = strXMLString; 
	
	// walk through a copy of the passed XML conforming string extracting and individually processing opening nodes, user data (if any) and closing nodes.
	while ( boolNotDone )
	{
		strCurrStr = strCurrStr.substring(intNodeEndingIndex);	// get balance of string to be examined: intNodeEndingIndex is adjusted as required in the body of the loop.
		
		arr_strMatch6 = strCurrStr.match(regexReg6);	// find the opening marker '<'
		arr_strMatch2 = strCurrStr.match(regexReg2);	// find the closing marker '>'
		if ( arr_strMatch6 == null ||  arr_strMatch2 == null )	// at a minimum, there should be both an opening and closing marker within the current string.
		{
			// we are done!
			boolNotDone = false;
			continue;
		}		
		intNodeEndingIndex = arr_strMatch2.index + 1;	// save the ending index in order to set the start position for the next current substring of the xml string;
		strNode = strCurrStr.substring(0, intNodeEndingIndex);	// capture the node from the current substring

		// Using a complete node substring '< . . . >' :-
		if ( strNode.substring(0, 5)	== '<text' )	//  text tag: must be handled separately from other tags as text nodes can contain non whitespace data between them.
		{
			if ( !(regexReg3.test(strNode)) )	// not self closing
			{
				// build the complete text line: opening text tag + data (if any: there should be!) + closing text tag
				strLine = strNode;	// opening text node, not self closing: '<text . . . >'
				var strNewCurrStr = strCurrStr.substring(intNodeEndingIndex);	// reset strNode to the start of the data section (end of opening text node), to the end of the XML string
				arr_strMatch6 = strNewCurrStr.match(regexReg6);	// find the opening marker '<', which should be at the start of a closing text tag '</text..>		
				strLine += strNewCurrStr.substring(0, arr_strMatch6.index);	 // add data to previous opening text node
				intNodeEndingIndex = arr_strMatch6.index;	// set next starting index
				strNewCurrStr = strNewCurrStr.substring(intNodeEndingIndex);	// set new current string from previous intNodeEndingIndex
				arr_strMatch2 = strNewCurrStr.match(regexReg2);	// find the closing marker '>'. which should be at the end of the closing text node '</text ... >'
				strLine += strNewCurrStr.substring(0, arr_strMatch2.index + 1);	// add the closing node to the previous opening node and data string
				intNodeEndingIndex = strLine.length;	// set the start for the next iteration through the balance of the xml string
				objNode = { node: strLine, indent: intIndent++ };	// save the information as object properties for later processing
				arrNodes.push(objNode);
				intIndent--;	// since we are closing this node
				continue;	// skip over balance of loop
			}
		}
		if ( regexReg4.test(strNode)  ||  regexReg3.test(strNode) )	// test for a std closing tag '</tag ...>' OR self closing marker '.../>
		{
			intIndent = regexReg3.test(strNode) ? intIndent : --intIndent;	// decrement indent only std closing tag
			objNode = { node: strNode, indent: intIndent };	// save the information as object properties for later processing			
			arrNodes.push(objNode);			
		}
		else
		{
			// store the node substring
			objNode = { node: strNode, indent: intIndent++ }; // save the information as object properties for later processing
			arrNodes.push(objNode);		
		}
	}
	
	// re-build the string according to the information in the object properties stored in the array: arrNodes
	var strXML = '\r\n';	// start the string off with a newline
	var strIndentSpaces = '   ';	// default indent
	var strEOL = '\r\n';	// append to each node, except for text nodes: the new line is appended only to the closing text node as the complete text node appears as a single string.
	// loop through the array adjusting and adding each node to the string.
	for ( var j=0;j<arrNodes.length;j++ )
	{	
		strXML += strIndentSpaces.repeat(arrNodes[j].indent) + arrNodes[j].node + strEOL;	// indent + node + new line.
	}
	
	return strXML;	// return the formatted XML string
}