using Microsoft.EntityFrameworkCore.Migrations;

namespace Project1.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "rut",
                table: "Operador",
                type: "varchar(15)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(10)");

            migrationBuilder.CreateTable(
                name: "Tren",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    numeroTren = table.Column<int>(type: "int", nullable: false),
                    observacion = table.Column<string>(type: "varchar(256)", nullable: false),
                    operadorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tren", x => x.id);
                    table.ForeignKey(
                        name: "FK_Tren_Operador_operadorId",
                        column: x => x.operadorId,
                        principalTable: "Operador",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tren_operadorId",
                table: "Tren",
                column: "operadorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tren");

            migrationBuilder.AlterColumn<string>(
                name: "rut",
                table: "Operador",
                type: "varchar(10)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(15)");
        }
    }
}
