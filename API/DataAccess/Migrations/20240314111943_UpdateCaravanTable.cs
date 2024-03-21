using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCaravanTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "Caravans",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3a97beb2-2b28-4537-b58c-d4ef78a80bdf",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "d959211e-c5bc-4b80-b13c-0c6415f9a4b8", "AQAAAAIAAYagAAAAEDvh1yacJFJa9vxGn/aJvNgfVqudD/cCQfcJSPueRcYZT0kztYFqIdl665+E+mAy3Q==", "5e72427b-7a6c-477a-a0d4-97304e9c2cc7" });

            migrationBuilder.UpdateData(
                table: "Caravans",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImagePath",
                value: "C:\\Users\\Bilgin\\Desktop\\hata");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "Caravans");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3a97beb2-2b28-4537-b58c-d4ef78a80bdf",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "95ce4d48-3346-411d-9895-77a23d5bad6f", "AQAAAAIAAYagAAAAEN1trB77FXJ8N83J+IPSvTbZL7u/09rc+LPcpd39QO21aGHHeNyt/7KMIZE+2VjayA==", "8b386167-56cb-4b86-ad01-3b4ffbce3f3b" });
        }
    }
}
