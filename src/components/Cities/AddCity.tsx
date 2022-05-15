import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ICity } from '../../services/dto/ICity';
import classes from './City.module.css';

interface AddCityForm {
  name: string;
}

interface ComponentProps {
  handleAddCity: (entity: ICity | null) => void;
}

const AddCity = ({ handleAddCity }: ComponentProps) => {
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCityForm>();

  const handleFormSubmit = async (data: AddCityForm): Promise<void> => {
    if (!data.name) return;

    handleAddCity({ name: data.name });
  };
  const onSubmit: SubmitHandler<AddCityForm> = (data: AddCityForm) =>
    handleFormSubmit(data);

  const maybeErrorMsg = errors.name ? (
    <div className="errorAlert" role="alert" data-valmsg-summary="true">
      All fields are required.
    </div>
  ) : null;

  return (
    <div>
      <div className={classes.root}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <input
            placeholder="City name"
            {...registerForm('name', { required: true })}
            type="text"
          />
          <button type="submit" className="button">
            Add city
          </button>
        </form>
      </div>
      {maybeErrorMsg}
    </div>
  );
};

export default AddCity;
