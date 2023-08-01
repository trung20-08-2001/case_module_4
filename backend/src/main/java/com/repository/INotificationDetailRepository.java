package com.repository;

import com.model.NotificationDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INotificationDetailRepository extends JpaRepository<NotificationDetail,Long> {
}
