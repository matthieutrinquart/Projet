﻿using System.Linq;
using Tic_Tac_Toe.Boards;

namespace Tic_Tac_Toe
{
    public static class UpdateMatrix
    {
        public static string[,] Update()
        {
            int n = Board.Rows;
            string[,] cells = new string[n, n];
            string[] cmat = Board.Cells.Select(c => c.Sign).ToArray();
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    cells[i, j] = cmat[i * n + j];
                }
            }
            return cells;
        }
    }
}
