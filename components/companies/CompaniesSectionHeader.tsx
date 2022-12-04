'use client';
import { Modal } from '@components/Modal';
import { SectionHeader } from '@components/SectionHeader';
import { zodResolver } from '@hookform/resolvers/zod';
import { Company } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

const postCompany = (data: SchemaType): Promise<Company> => {
  if (!data) return Promise.reject('data is not provided');

  return fetch('http://localhost:3000/api/companies', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

interface Props {
  title: string;
}

const FormSchema = z.object({
  name: z.string().min(4),
  email: z.string().email().min(2),
  address: z.string().min(6),
  phone: z.string().min(6),
});

type SchemaType = z.infer<typeof FormSchema>;

export const CompaniesSectionHeader = ({ title }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(FormSchema),
  });
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();
  const addCompany = useMutation(postCompany, {
    onSuccess: (data) => {
      toast.success(`company ${data.name} added.`);
      queryClient.invalidateQueries(['companies']);
    },
    onError: () => {
      toast.error('Someting went wrong. Unable to add company.');
    },
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data: SchemaType) => {
    try {
      addCompany.mutate(data);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      toast.error(message);
    }

    setIsOpen(false);
    reset();
  };

  return (
    <>
      <SectionHeader
        title={title}
        button={
          <button
            type="button"
            className="px-6 py-2 font-semibold rounded-full bg-violet-400 dark:text-gray-900 text-xs"
            onClick={() => setIsOpen(true)}
          >
            Add
          </button>
        }
      />
      <Modal
        header="Add company"
        body={
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full text-sm ">
                <label htmlFor="companyName" className="dark:text-gray-400">
                  Company name
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Company name"
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                {errors.name?.message && (
                  <p className="text-red-600">{errors.name?.message}</p>
                )}
              </div>

              <div className="col-span-full text-sm">
                <label htmlFor="companyAddress" className="dark:text-gray-400">
                  Address
                </label>
                <input
                  id="companyAddress"
                  type="text"
                  placeholder="Address"
                  {...register('address')}
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                {errors.address?.message && (
                  <p className="text-red-600">{errors.address?.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3 text-sm">
                <label htmlFor="email" className="dark:text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                {errors.email?.message && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3 text-sm">
                <label htmlFor="companyPhone" className="dark:text-gray-400">
                  Phone
                </label>
                <input
                  id="companyPhone"
                  type="text"
                  placeholder="Phone"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                {errors.phone?.message && (
                  <p className="text-red-600">{errors.phone?.message}</p>
                )}
              </div>
            </div>
          </form>
        }
        footer={
          <>
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="mr-4 inline-flex justify-center rounded-full border border-transparent bg-violet-400 px-4 py-2 text-sm font-medium dark:text-gray-900 hover:dark:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Submit
            </button>
          </>
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
