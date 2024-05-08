import { create } from 'zustand'

export const useBoardStore = create((set, get) => ({
    iterations: 3,
    gameBoard: [],
    createBoard: () => {
        let gameBoard = []
        for (let i = 0; i < get().iterations; i++) {
            let buttonRow = []
            for (let j = 0; j < get().iterations; j++) {
                buttonRow.push({
                    symbol: '',
                    location: [i, j]
                })
            }
            gameBoard.push(buttonRow)
            set({ gameBoard })
        }
    },
    updateSymbol: (row, col, symbol) => {
        let gameBoard = get().gameBoard
        if (gameBoard[row] && gameBoard[row][col]) {
            gameBoard[row][col].symbol = symbol
            set({ gameBoard: [...gameBoard] })
        }
    }

}))


export const useTurnStore = create((set, get) => ({
    turn: false,
    setTurn: () => set(state => ({ turn: !state.turn }))
}))