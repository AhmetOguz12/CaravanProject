using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.DataAccess.EntityFramework
{
    public class EfEntityRepositoryBase<TEntity, TContext> : IEntityRepository<TEntity>
        where TEntity : class, new()
        where TContext : DbContext, new()
    {
        public void Add(TEntity entity)
        {
            using (TContext c = new TContext())
            {
                var addedentity = c.Entry(entity);
                addedentity.State = EntityState.Added;
                c.SaveChanges();

            }
        }

        public void Delete(TEntity entity)
        {
            using (TContext c = new TContext())
            {
                var deletedentity = c.Entry(entity);
                deletedentity.State = EntityState.Deleted;
                c.SaveChanges();
            }
        }

        public TEntity Get(Expression<Func<TEntity, bool>> filter)
        {
            using (TContext c = new TContext())
            {
                return c.Set<TEntity>().SingleOrDefault(filter);
            }
        }

        public List<TEntity> GetAll(Expression<Func<TEntity, bool>> filter = null)
        {
            using (TContext c = new TContext())
            {
                return filter == null
                    ? c.Set<TEntity>().ToList()
                    : c.Set<TEntity>().Where(filter).ToList();
            }
        }

        public void Update(TEntity entity)
        {
            using (TContext c = new TContext())
            {
                var updatedEntity = c.Entry(entity);
                updatedEntity.State = EntityState.Modified;
                c.SaveChanges();
            }
        }
    }
}
