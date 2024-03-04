using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface ICaravanService
    {
        IDataResult<List<Caravan>> GetAll();
        IDataResult<Caravan> GetById(int id);
        IResult Add(Caravan caravan);
        IResult Delete(Caravan caravan);
        IResult Update(Caravan caravan);
        IDataResult<List<Caravan>> GetByBrandId(int brandId);
        IDataResult<List<Caravan>> GetByColorId(int colorId);

    }
}
