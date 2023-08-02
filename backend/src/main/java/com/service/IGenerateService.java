package com.service;

import java.util.List;
import java.util.Optional;

public interface IGenerateService <E, ID> {
    List<E> findAll();

    Optional<E> findById(ID id);

    void save(E e);

    void delete(ID id);
}
