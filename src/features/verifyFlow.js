

export const verifyFlow = (input, llm, flow) => {
    const { prompt, apiBase, apiKey, maxToken, temperature } = llm
    const { nodes, edges } = flow

    // check the graph flow are connected or not if not return the message
    const newNodes = nodes.map((node) => {
        return { id: node.id, count: node.type === "llm" ? 2 : 1 }
    })

    edges.forEach((edge) => {
        let index = newNodes.findIndex(item => item.id === edge.source)
        if (index !== -1)
            newNodes[index] = { ...newNodes[index], count: newNodes[index].count - 1 }
        index = newNodes.findIndex(item => item.id === edge.target)
        if (index !== -1)
            newNodes[index] = { ...newNodes[index], count: newNodes[index].count - 1 }
    })

    const unfinishedGraphFlow = newNodes.some(item => item.count > 0)

    if (unfinishedGraphFlow)
        return { message: "correct the Egde flow" }

    // check the field value correct or not if not return message and which node type
    let message = ""
    let type = ""
    if (!input.length) {
        message = "Input Required"
        type = 'input'
        return { message, type }
    }
    if (!prompt.length) {
        message = "Prompt required"
        type = 'llm'
        return { message, type }
    }

    if (!maxToken.length) {
        message = "Max token required"
        type = 'llm'
        return { message, type }

    }
    if (!apiBase.length) {
        message = "Api base required"
        type = 'llm'
        return { message, type }

    }
    if (!temperature===0) {
        message = "Temperature required"
        type = 'llm'
        return { message, type }

    }
    if (!apiKey.length) {
        message = "Api Key required"
        type = 'llm'
        return { message, type }

    }
    return false
}