Meteor.startup(function() {
    toolManager.addTool('bidirectional', {
        mouse: cornerstoneTools.bidirectional,
        touch: cornerstoneTools.bidirectionalTouch
    });

    toolManager.addTool('nonTarget', {
        mouse: cornerstoneTools.nonTarget,
        touch: cornerstoneTools.nonTargetTouch
    });

    toolManager.addTool('scaleOverlayTool', {
        mouse: cornerstoneTools.scaleOverlayTool,
        touch: cornerstoneTools.scaleOverlayTool
    });

    toolManager.addTool('deleteLesionKeyboardTool', {
        mouse: cornerstoneTools.deleteLesionKeyboardTool,
        touch: cornerstoneTools.deleteLesionKeyboardTool
    });

    toolManager.addTool('crTool', {
        mouse: cornerstoneTools.crTool,
        touch: cornerstoneTools.crToolTouch
    });

    toolManager.addTool('unTool', {
        mouse: cornerstoneTools.unTool,
        touch: cornerstoneTools.unToolTouch
    });

    toolManager.addTool('exTool', {
        mouse: cornerstoneTools.exTool,
        touch: cornerstoneTools.exToolTouch
    });

    // Update default state for tools making sure each tool is only inserted once
    let currentDefaultStates = toolManager.getToolDefaultStates();
    let newDefaultStates = {
        deactivate: ['bidirectional', 'nonTarget', 'length', 'crTool', 'unTool', 'exTool'],
        activate: ['deleteLesionKeyboardTool']
    };

    for (let state in newDefaultStates) {
        newDefaultStates[state].forEach(function(tool) {
            let tools = currentDefaultStates[state];
            // make sure each tool is only inserted once
            if (tools && tools.indexOf(tool) < 0) {
                tools.push(tool);
            }
        });
    }

    toolManager.setToolDefaultStates(currentDefaultStates);

});