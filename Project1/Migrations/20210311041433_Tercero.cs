using Microsoft.EntityFrameworkCore.Migrations;

namespace Project1.Migrations
{
    public partial class Tercero : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tren_Operador_operadorId",
                table: "Tren");

            migrationBuilder.DropIndex(
                name: "IX_Tren_operadorId",
                table: "Tren");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Tren_operadorId",
                table: "Tren",
                column: "operadorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tren_Operador_operadorId",
                table: "Tren",
                column: "operadorId",
                principalTable: "Operador",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
