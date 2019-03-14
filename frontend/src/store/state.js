export default {
    web3: {
        isInjected: null,
        networkID: null,
        coinbase: null,
        balance: null,
        web3Instance: null
    },
    icoState: {
        icoGoal: null,
        icoEtherBalance: null,
        isIcoActive: null,
        totalTokenSupply: null,
        icoParticipantCount: null,
        tokenSymbol: null,
        tokenBalanceUser: null,
        etherBalanceUser: null,
        name: null,
        decimals: null
    },
    proposalManagementInstance: null,
    requestManagementInstance: null,
    icoContractInstance: null,
    proposals: [],
    allRequests: [],
    contractFee: null,
    authenticated: false
}
