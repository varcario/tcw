// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using Microsoft.EntityFrameworkCore;

namespace FileUploadApi.Entities
{
    public partial class TcwDbContext : DbContext
    {
        public TcwDbContext()
        {
        }

        public TcwDbContext(DbContextOptions<TcwDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Record> Record { get; set; }
        public virtual DbSet<StateLookup> StateLookup { get; set; }
        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<Group> Group { get; set; }
        public virtual DbSet<GroupAddress> GroupAddress { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Record>(entity =>
            {
                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(1000);

                entity.Property(e => e.FilePath).HasMaxLength(255);

                entity.Property(e => e.Ts)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("TS");

            });

            modelBuilder.Entity<StateLookup>(entity => { });
            modelBuilder.Entity<Address>(entity => {

                entity.Property(e => e.StreetAddress)
                    .IsRequired()
                    .HasMaxLength(64);

                entity.Property(e => e.Suite).HasMaxLength(16);
                entity.Property(e => e.ZipCode).HasMaxLength(16);
                entity.Property(e => e.StateId)
                    .IsRequired();

                entity.Property(e => e.Ts)
                       .HasColumnType("smalldatetime")
                       .HasColumnName("TS");
            });
            modelBuilder.Entity<Group>(entity => {

                entity.Property(e => e.GroupName)
                    .IsRequired()
                    .HasMaxLength(64);

                entity.Property(e => e.Ts)
                       .HasColumnType("smalldatetime")
                       .HasColumnName("TS");
            });
            modelBuilder.Entity<GroupAddress>(entity => {
               
                entity.Property(e => e.GroupId)
                    .IsRequired();

                entity.Property(e => e.AddressId)
                    .IsRequired();

                entity.Property(e => e.Ts)
                       .HasColumnType("smalldatetime")
                       .HasColumnName("TS");
            });

            OnModelCreatingPartial(modelBuilder);
        }


        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
